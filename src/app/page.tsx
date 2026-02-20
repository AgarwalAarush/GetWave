import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-zinc-100">
      {/* Nav — liquid glass floating bar */}
      <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/[0.06] bg-white/[0.015] px-6 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_4px_24px_-4px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg font-semibold tracking-tight"
          >
            <Image
              src="/logo.png"
              alt="Wave"
              width={28}
              height={28}
              className="rounded-lg"
            />
            Wave
          </Link>
          <a
            href="https://github.com/agarwalaarush/Wave"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-32 pb-24">
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-400">
            macOS Menu Bar
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            AI chat — OpenAI & Anthropic{" "}
            <span className="text-zinc-300">— in your menu bar.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Your AI assistant lives in the menu bar. Screen capture for context,
            markdown and code blocks, global hotkey. From quick answers to full
            coding context.
          </p>
        </div>
      </section>

      {/* Use Cases — Two Columns */}
      <section className="border-y border-zinc-800/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-2xl font-semibold tracking-tight text-zinc-200">
            Built for how you work
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Developer Column */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_4px_24px_-4px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.015] text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-zinc-100">
                Developer
              </h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-zinc-500">→</span>
                  AI chat with OpenAI & Anthropic models
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-zinc-500">→</span>
                  Screen capture for coding context
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-zinc-500">→</span>
                  Markdown & syntax-highlighted code blocks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-zinc-500">→</span>
                  Floating panel, always one hotkey away
                </li>
              </ul>
            </div>

            {/* Power User Column */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_4px_24px_-4px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.015] text-zinc-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v2" />
                  <path d="M12 19v2" />
                  <path d="M3 12h2" />
                  <path d="M19 12h2" />
                  <path d="M5.64 5.64l1.42 1.42" />
                  <path d="M16.94 16.94l1.42 1.42" />
                  <path d="M5.64 18.36l1.42-1.42" />
                  <path d="M16.94 7.06l1.42-1.42" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-zinc-100">
                Power User
              </h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-zinc-500">→</span>
                  Shift+Delete — toggle panel
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-zinc-500">→</span>
                  Cmd+N new chat, Cmd+Shift+M model selector
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-zinc-500">→</span>
                  API keys in Keychain, light/dark/system
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-zinc-500">→</span>
                  Runs in menu bar, no dock icon
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-2xl font-semibold tracking-tight text-zinc-200">
            Roadmap
          </h2>
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_4px_24px_-4px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <span className="mb-4 inline-block rounded-full bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300">
                Phase 1
              </span>
              <h3 className="mb-2 text-lg font-semibold text-zinc-100">
                Core Chat
              </h3>
              <p className="text-zinc-400">
                Menu bar app with floating panel. OpenAI and Anthropic streaming.
                Markdown and code block rendering.
              </p>
            </div>
            <div className="hidden shrink-0 self-center md:block">
              <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent" />
              <div className="mx-auto h-2 w-2 rounded-full bg-white/20" />
            </div>
            <div className="flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_4px_24px_-4px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <span className="mb-4 inline-block rounded-full bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300">
                Phase 2
              </span>
              <h3 className="mb-2 text-lg font-semibold text-zinc-100">
                Screen Capture & Models
              </h3>
              <p className="text-zinc-400">
                Optional screenshot per query for context. GPT-5 and Claude 4.5
                model support. Model picker and settings.
              </p>
            </div>
            <div className="hidden shrink-0 self-center md:block">
              <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent" />
              <div className="mx-auto h-2 w-2 rounded-full bg-white/20" />
            </div>
            <div className="flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_4px_24px_-4px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <span className="mb-4 inline-block rounded-full bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300">
                Phase 3
              </span>
              <h3 className="mb-2 text-lg font-semibold text-zinc-100">
                Shortcuts & Polish
              </h3>
              <p className="text-zinc-400">
                Global hotkey, Keychain API keys, appearance settings. Refined
                UI and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-t border-zinc-800/50 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <blockquote className="rounded-2xl border border-white/[0.06] bg-white/[0.015] px-8 py-10 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset,0_4px_24px_-4px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <span className="text-2xl font-medium leading-relaxed text-zinc-200 sm:text-3xl">
              &ldquo;From quick answers to full coding context — all from your
              menu bar.&rdquo;
            </span>
            <p className="mt-6 text-zinc-500">Wave — macOS Menu Bar AI Chat</p>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Wave. macOS Menu Bar AI Chat.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/agarwalaarush/Wave"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
