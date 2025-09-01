/* eslint-disable no-console */
import { Children } from "react";
import createEmotionServer from "@emotion/server/create-instance";
import Document, { Head, Html, Main, NextScript } from "next/document";

// Utils
import { createEmotionCache } from "../utils/helpers/styling.helper";

class CustomDocument extends Document {
  render() {
    return (
      <Html translate="no">
        <Head>
          <meta name="author" content="Game & Chill" />
          <meta name="company" content="Game & Chill" />

          <meta name="theme-color" content="#382617" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />

          <link crossOrigin="use-credentials" rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

CustomDocument.getInitialProps = async ctx => {
  console.clear();
  const startTime = Date.now();
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => (function EnhanceApp(props) {
      return <App emotionCache={cache} {...props} />;
    }),
  });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map(style => (
    <style
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
    />
  ));

  console.info(`Render Time: ${Date.now() - startTime} in ms`);
  return {
    ...initialProps,
    styles: [
      ...Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};

export default CustomDocument;
