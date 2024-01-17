import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppProps, type AppType } from "next/app";
import { api } from "~/utils/api";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, MantineColorsTuple } from '@mantine/core';

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
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

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
      <MantineProvider theme={theme}>
      {
        getLayout(<Component {...pageProps} />)
      } 
      </MantineProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
