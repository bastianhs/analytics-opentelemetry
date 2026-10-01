'use client';

import { useActionState } from 'react';
import { login, type LoginFormState } from '@/app/actions/auth';
import Link from 'next/link';

const initialState: LoginFormState = {};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] px-4">
      <main
        className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-[#D9D9D9] px-8 py-10"
        aria-label="Login form"
      >
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1
            className="text-[32px] font-bold leading-[1.3] tracking-[-0.02em] text-[#2F39A9]"
            style={{ fontFamily: "'Bitter', Georgia, Cambria, serif" }}
          >
            Welcome Back
          </h1>
          <p
            className="mt-2 text-[16px] text-[#595959] leading-[1.5]"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Sign in to access your account
          </p>
        </div>

        {/* Global error message */}
        {state.message && (
          <div
            role="alert"
            aria-live="assertive"
            className="mb-6 flex items-start gap-2 rounded-lg border border-[#DC2626] bg-red-50 px-4 py-3 text-[14px] text-[#DC2626]"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            <svg
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-10.5a.75.75 0 011.5 0v4a.75.75 0 01-1.5 0v-4zm.75 7a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            {state.message}
          </div>
        )}

        <form action={formAction} noValidate>
          {/* Email field */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-[16px] font-semibold text-[#262626]"
              style={{ fontFamily: "'Bitter', Georgia, Cambria, serif" }}
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-describedby={state.errors?.email ? 'email-error' : undefined}
              aria-invalid={!!state.errors?.email}
              className={[
                'block w-full rounded-lg border px-4 py-3 text-[16px] text-[#262626] placeholder:text-[#A6A6A6]',
                'transition-colors duration-150',
                'focus:outline-none focus:ring-2 focus:ring-[#2F39A9] focus:ring-offset-1',
                'min-h-[44px]',
                state.errors?.email
                  ? 'border-[#DC2626] bg-red-50'
                  : 'border-[#D9D9D9] bg-white hover:border-[#49A4BB]',
              ].join(' ')}
              style={{ fontFamily: "'Raleway', sans-serif" }}
              placeholder="you@example.com"
            />
            {state.errors?.email && (
              <p
                id="email-error"
                role="alert"
                className="mt-1.5 text-[13px] text-[#DC2626]"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {state.errors.email[0]}
              </p>
            )}
          </div>

          {/* Password field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-[16px] font-semibold text-[#262626]"
              style={{ fontFamily: "'Bitter', Georgia, Cambria, serif" }}
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              aria-describedby={state.errors?.password ? 'password-error' : undefined}
              aria-invalid={!!state.errors?.password}
              className={[
                'block w-full rounded-lg border px-4 py-3 text-[16px] text-[#262626] placeholder:text-[#A6A6A6]',
                'transition-colors duration-150',
                'focus:outline-none focus:ring-2 focus:ring-[#2F39A9] focus:ring-offset-1',
                'min-h-[44px]',
                state.errors?.password
                  ? 'border-[#DC2626] bg-red-50'
                  : 'border-[#D9D9D9] bg-white hover:border-[#49A4BB]',
              ].join(' ')}
              style={{ fontFamily: "'Raleway', sans-serif" }}
              placeholder="Enter your password"
            />
            {state.errors?.password && (
              <p
                id="password-error"
                role="alert"
                className="mt-1.5 text-[13px] text-[#DC2626]"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {state.errors.password[0]}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={pending}
            aria-busy={pending}
            className={[
              'flex w-full items-center justify-center gap-2 rounded-full px-6 py-3',
              'min-h-[48px] text-[16px] font-semibold text-white',
              'transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-[#2F39A9] focus:ring-offset-2',
              pending
                ? 'cursor-not-allowed bg-[#A6A6A6]'
                : 'bg-[#2F39A9] hover:bg-[#2E6FA0] active:bg-[#093C5D]',
            ].join(' ')}
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            {pending ? (
              <>
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                  />
                </svg>
                Signing in…
              </>
            ) : (
              'Sign in'
            )}
          </button>
        </form>

        {/* Back to home */}
        <p
          className="mt-6 text-center text-[14px] text-[#595959]"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          <Link
            href="/"
            className="font-medium text-[#2F39A9] underline hover:text-[#2E6FA0] focus:outline-none focus:ring-2 focus:ring-[#2F39A9] focus:ring-offset-1 rounded"
          >
            ← Back to home
          </Link>
        </p>

        {/* Demo credentials hint */}
        <div className="mt-6 rounded-lg border border-[#6FD1D7] bg-[#F3F3F3] px-4 py-3 text-center text-[13px] text-[#595959]"
          style={{ fontFamily: "'Raleway', sans-serif" }}>
          <span className="font-semibold text-[#2F39A9]">Demo credentials:</span>{' '}
          user@example.com / password123
        </div>
      </main>
    </div>
  );
}
