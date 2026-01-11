import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Amanuel Ayalew - Software Engineer & ML Enthusiast",
  description: "Portfolio of Amanuel Ayalew, Software Engineer with expertise in machine learning, full-stack development, and AI technologies.",
  keywords: ["Software Engineer", "Machine Learning", "AI", "Full-stack Developer", "Python", "React", "Next.js"],
  authors: [{ name: "Amanuel Ayalew" }],
  creator: "Amanuel Ayalew",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
