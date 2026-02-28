import "./globals.css";

export const metadata = {
  title: {
    default: "Culture Hill",
    template: "%s | Culture Hill",
  },
  description: "Culture Hill organic farm website.",
  keywords: ["organic farming", "farm produce", "Culture Hill", "Ibadan"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
