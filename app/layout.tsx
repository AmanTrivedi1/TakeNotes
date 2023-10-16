import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { Inter, The_Girl_Next_Door } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Take Notes",
  description: "App Like Notion To Create Notes",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/logolight.svg",
        href: "/logolight.svg",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/logodark.svg",
        href: "/logodark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="TakeNote-theme-2"
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
