import Script from "next/script";

const ASSET_VERSION = "20260301-4";

export default function LegacyPage({ markup, stylesheets = [], scripts = [] }) {
  const withVersion = (url) =>
    url.includes("?") ? `${url}&v=${ASSET_VERSION}` : `${url}?v=${ASSET_VERSION}`;

  return (
    <>
      {stylesheets.map((href) => (
        <link key={href} rel="stylesheet" href={withVersion(href)} />
      ))}
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: markup }} />
      {scripts.map((src) => (
        <Script key={src} src={withVersion(src)} strategy="afterInteractive" />
      ))}
    </>
  );
}
