import { axiosClient } from "@/api/axiosClinet";
import createEmotionCache from "@/utils/create-emotion-cache.page";
import theme from "@/utils/theme.page";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { EmptyLayout } from "component/layout/index.page";
import { SWRConfig } from "swr";
import { AppPropsWithLayout } from "../models/common.page";
import "../styles/globals.css";
import "../styles/prism.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher: (url) => axiosClient.get(url),
            shouldRetryOnError: false,
            revalidateOnFocus: false,
            dedupingInterval: 60 * 60 * 100,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
