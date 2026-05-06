import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WORC Stockholm",
  description: "The Operational Core",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}