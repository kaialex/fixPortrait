import "../globals.css";

export const metadata = {
  title: "atgt2023-11",
  description: "atgt2023-11",
};

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <body className="bg-slate-100">{children}</body>
    </html>
  );
}
