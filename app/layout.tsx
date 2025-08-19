import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoffeeBook - Connect with Coffee Lovers",
  description: "Your digital companion for coffee lovers. Discover, share, and explore the world of coffee with fellow enthusiasts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
