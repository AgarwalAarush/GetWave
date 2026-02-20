import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SwirlCanvas } from "@/components/SwirlCanvas";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wave | macOS Menu Bar AI Chat",
  description:
    "Your AI chat assistant in the menu bar — OpenAI and Anthropic. Screen capture for context, markdown and code blocks, global hotkey. From quick answers to full coding context.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased relative bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SwirlCanvas />
          <div className="relative z-0">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
