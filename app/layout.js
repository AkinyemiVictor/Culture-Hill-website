export const metadata = {
  title: "Culture Hill",
  description: "Culture Hill website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
