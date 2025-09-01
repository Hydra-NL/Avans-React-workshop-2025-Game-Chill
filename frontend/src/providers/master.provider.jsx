import { ApolloProvider } from "@apollo/client";
import { CacheProvider } from "@emotion/react";

// Core
import { CssBaseline } from "@mui/material";
import ThemeProvider from "./theme.provider";

// GraphQL
import { useApollo } from "@/graphql/client";

function MasterProvider(props) {
  const {
    children,
    emotionCache,
    pageProps,
  } = props;

  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <ApolloProvider client={apolloClient}>
          <CssBaseline enableColorScheme />
          {children}
        </ApolloProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MasterProvider;
