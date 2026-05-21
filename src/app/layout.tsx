import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../components/ThemeContext";
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
  title: "Fardin Fahim | Full Stack Developer",
  description: "Professional developer portfolio of Fardin Fahim. Showcasing responsive web applications, interactive interfaces, and robust systems built using Next.js, Laravel, TypeScript, and SQL databases.",
  keywords: [
    "Fardin Fahim",
    "Full Stack Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Dhaka",
    "Bangladesh",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Fardin Fahim" }],
  creator: "Fardin Fahim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fardinfahim.dev",
    title: "Fardin Fahim | Full Stack Developer Portfolio",
    description: "Showcasing responsive web applications, interactive interfaces, and robust systems built using Next.js, Laravel, and TypeScript.",
    siteName: "Fardin Fahim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fardin Fahim | Full Stack Developer Portfolio",
    description: "Showcasing responsive web applications, interactive interfaces, and robust systems built using Next.js, Laravel, and TypeScript.",
    creator: "@fardinfahim",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Flash prevention script: sets the theme before rendering starts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var theme = saved || 'dark-neon';
                  document.documentElement.classList.remove('theme-dark-neon', 'theme-light-minimal', 'theme-cyber-gradient');
                  document.documentElement.classList.add('theme-' + theme);
                  if (theme !== 'light-minimal') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  console.error(e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
