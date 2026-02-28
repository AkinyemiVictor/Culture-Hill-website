import Script from "next/script";

export default function LegacyPage({ markup, stylesheets = [], scripts = [] }) {
  return (
    <>
      {stylesheets.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: markup }} />
      {scripts.map((src) => (
        <Script key={src} src={src} strategy="afterInteractive" />
      ))}
    </>
  );
}
