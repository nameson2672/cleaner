import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppProps, type AppType } from "next/app";
import {ThemeProvider as NextThemesProvider} from "next-themes";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
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
      <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
      {
        getLayout(<Component {...pageProps} />)
      } 
      </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
