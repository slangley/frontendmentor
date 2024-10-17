import "~/styles/globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor",
  description: "Kata from Frontend Mentor",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
