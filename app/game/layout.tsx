import "../globals.css";

export const metadata = {
  title: "portrait",
  description: "portrait",
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
