'use server';

import { redirect } from 'next/navigation';
import { createSession, deleteSession } from '@/app/lib/session';

// ─── Types ────────────────────────────────────────────────────────────────────

export type LoginFormState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
  success?: boolean;
};

// ─── Mock user store (no DB as per current scope) ─────────────────────────────
// Replace this with a real DB lookup when the database is connected.

const MOCK_USERS = [
  {
    id: 'user-001',
    email: 'user@example.com',
    // SHA-256 hash of "password123" (hex) — swap for bcrypt in production
    passwordHash: 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f',
  },
];

async function hashPassword(password: string): Promise<string> {
  // Using Web Crypto API (available in Next.js edge & Node runtimes)
  const msgBuffer = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

// ─── Validation helpers ───────────────────────────────────────────────────────

function validateEmail(email: string): string[] {
  const errors: string[] = [];
  if (!email || email.trim() === '') {
    errors.push('Email is required.');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.push('Please enter a valid email address.');
  }
  return errors;
}

function validatePassword(password: string): string[] {
  const errors: string[] = [];
  if (!password || password === '') {
    errors.push('Password is required.');
  }
  return errors;
}

// ─── Login action ─────────────────────────────────────────────────────────────

export async function login(
  _prevState: LoginFormState,
  formData: FormData,
): Promise<LoginFormState> {
  const email = (formData.get('email') as string) ?? '';
  const password = (formData.get('password') as string) ?? '';

  // 1. Validate fields
  const emailErrors = validateEmail(email);
  const passwordErrors = validatePassword(password);

  if (emailErrors.length > 0 || passwordErrors.length > 0) {
    return {
      errors: {
        ...(emailErrors.length > 0 && { email: emailErrors }),
        ...(passwordErrors.length > 0 && { password: passwordErrors }),
      },
    };
  }

  // 2. Hash submitted password
  const hashedPassword = await hashPassword(password.trim());

  // 3. Look up user by email + hashed password (mock — no DB)
  const user = MOCK_USERS.find(
    (u) => u.email === email.trim() && u.passwordHash === hashedPassword,
  );

  if (!user) {
    return {
      message: 'Invalid email or password. Please try again.',
    };
  }

  // 4. Create session cookie
  await createSession(user.id, user.email);

  // 5. Redirect to home (authenticated view)
  redirect('/');
}

// ─── Logout action ────────────────────────────────────────────────────────────

export async function logout(): Promise<void> {
  await deleteSession();
  redirect('/');
}
