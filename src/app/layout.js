export const metadata = {
  title: "Корсак",
  description: "Цифровая образовательная платформа Корсак",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
