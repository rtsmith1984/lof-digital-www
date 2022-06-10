import Head from 'next/head';

export function HeadComponent() {
  return (
    <Head>
      <title>Lakes of Fire 2022 Digital WWW</title>
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
      <link rel="shortcut icon" href="favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=PT+Sans&family=Russo+One&display=swap"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="white" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
    </Head>
  );
}

export default HeadComponent;
