import './globals.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BlazeTasks",
  description: "A simple task management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
