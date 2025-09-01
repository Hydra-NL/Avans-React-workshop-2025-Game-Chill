import NProgress from "nprogress";
import Router from "next/router";

// Layouts
import { BaseLayout } from "@/layouts";

// Utils
import { createEmotionCache } from "@/helpers/styling.helper";
import MasterProvider from "../providers/master.provider";

// Style
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const clientSideEmotionCache = createEmotionCache();

function App(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router,
  } = props;

  return (
    <MasterProvider
      pageProps={pageProps}
      emotionCache={emotionCache}
    >
      <BaseLayout>
        <Component
          {...pageProps}
          query={router.query}
        />
      </BaseLayout>
    </MasterProvider>
  );
}

export default App;
