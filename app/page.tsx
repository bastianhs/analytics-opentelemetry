import Link from 'next/link';
import { getSession } from '@/app/lib/session';
import { logout } from '@/app/actions/auth';

export default async function Home() {
  const session = await getSession();
  const isAuthenticated = !!session;

  // ─── Authenticated View ──────────────────────────────────────────────────
  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F9F9F9]">
        {/* Nav bar */}
        <header className="bg-[#2F39A9] px-6 py-0 h-16 flex items-center justify-between shadow-sm">
          <span
            className="text-white text-[20px] font-bold tracking-[-0.02em]"
            style={{ fontFamily: "'Bitter', Georgia, Cambria, serif" }}
          >
            MyApp
          </span>
          <form action={logout}>
            <button
              type="submit"
              className="rounded-full border border-white/40 px-5 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2F39A9] min-h-[44px]"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Log out
            </button>
          </form>
        </header>

        {/* Main content */}
        <main className="mx-auto max-w-3xl px-6 py-16">
          {/* Welcome */}
          <div className="mb-10">
            <h1
              className="text-[40px] font-bold leading-[1.2] tracking-[-0.02em] text-[#2F39A9]"
              style={{ fontFamily: "'Bitter', Georgia, Cambria, serif" }}
            >
              Welcome back!
            </h1>
            <p
              className="mt-3 text-[18px] leading-[1.5] text-[#595959]"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Signed in as{' '}
              <strong className="font-semibold text-[#262626]">{session.email}</strong>
            </p>
          </div>

          {/* Divider */}
          <hr className="border-[#E8E8E8] mb-10" />

          {/* Dashboard placeholder cards */}
          <section aria-label="Dashboard">
            <h2
              className="mb-6 text-[24px] font-semibold leading-[1.3] text-[#262626]"
              style={{ fontFamily: "'Bitter', Georgia, Cambria, serif" }}
            >
              Your Dashboard
            </h2>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Sessions', value: '1', accent: '#2F39A9' },
                { label: 'Last login', value: 'Now', accent: '#15D8B3' },
                { label: 'Status', value: 'Active', accent: '#059669' },
              ].map(({ label, value, accent }) => (
                <div
                  key={label}
                  className="rounded-xl border border-[#E8E8E8] bg-white p-6 shadow-sm"
                >
                  <p
                    className="text-[13px] font-medium uppercase tracking-[0.05em] text-[#737373]"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    {label}
                  </p>
                  <p
                    className="mt-2 text-[32px] font-bold leading-none"
                    style={{
                      fontFamily: "'Bitter', Georgia, Cambria, serif",
                      color: accent,
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  }

  // ─── Guest View ──────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* Nav bar */}
      <header className="bg-[#2F39A9] px-6 py-0 h-16 flex items-center justify-between shadow-sm">
        <span
          className="text-white text-[20px] font-bold tracking-[-0.02em]"
          style={{ fontFamily: "'Bitter', Georgia, Cambria, serif" }}
        >
          MyApp
        </span>
        <Link
          href="/login"
          className="rounded-full border border-white/40 px-5 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2F39A9] min-h-[44px] flex items-center"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          Sign in
        </Link>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1
          className="text-[48px] font-bold leading-[1.2] tracking-[-0.02em] text-[#2F39A9]"
          style={{ fontFamily: "'Bitter', Georgia, Cambria, serif" }}
        >
          Welcome to MyApp
        </h1>
        <p
          className="mx-auto mt-4 max-w-xl text-[18px] leading-[1.6] text-[#595959]"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          A secure, accessible platform built for you. Sign in to access your
          personalized dashboard and features.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/login"
            className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#2F39A9] px-8 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[#2E6FA0] active:bg-[#093C5D] focus:outline-none focus:ring-2 focus:ring-[#2F39A9] focus:ring-offset-2 sm:w-auto"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Sign in to your account
          </Link>
        </div>

        {/* Feature highlights */}
        <div className="mt-20 grid gap-6 text-left sm:grid-cols-3">
          {[
            {
              icon: '🔒',
              title: 'Secure',
              body: 'All data is encrypted in transit. Sessions are managed with secure httpOnly cookies.',
            },
            {
              icon: '⚡',
              title: 'Fast',
              body: 'Built on Next.js with server-side rendering for instant page loads.',
            },
            {
              icon: '♿',
              title: 'Accessible',
              body: 'WCAG 2.1 AA compliant — keyboard navigable, screen-reader friendly.',
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-[#E8E8E8] bg-white p-6 shadow-sm"
            >
              <span className="text-[32px]" aria-hidden="true">{icon}</span>
              <h2
                className="mt-3 text-[20px] font-semibold text-[#262626]"
                style={{ fontFamily: "'Bitter', Georgia, Cambria, serif" }}
              >
                {title}
              </h2>
              <p
                className="mt-2 text-[14px] leading-[1.5] text-[#595959]"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
