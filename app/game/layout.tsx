import "../globals.css";

export const metadata = {
  title: "ATGT Game11",
  description: "ATGT Game 11",
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
