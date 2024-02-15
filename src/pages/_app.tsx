import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppProps } from "next/app";
import { api } from "~/utils/api";
import { SpeedInsights } from "@vercel/speed-insights/next"
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, type MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
  '#ffe9f1',
  '#ffd1e0',
  '#faa1bd',
  '#f66e99',
  '#f2437a',
  '#f02866',
  '#f0185c',
  '#d6094d',
  '#c00043',
  '#a90039'
];

const theme = createTheme({
  colors: {
    myColor,
  }
});
import { type ReactElement, type ReactNode } from "react";
import { type NextPage } from "next";
import '@mantine/dates/styles.css';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<P = object> = AppProps & {
  Component: NextPageWithLayout<P>;
};

const MyApp: React.FC<AppPropsWithLayout<{ session: Session }>> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <SessionProvider session={session}>
      <SpeedInsights />
      <MantineProvider theme={theme}>
      {
        getLayout(<Component {...pageProps} />)
      } 
      </MantineProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
