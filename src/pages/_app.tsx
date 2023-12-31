import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppProps, type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import {RootLayout} from "./layout";
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
      {
        getLayout(<Component {...pageProps} />)
      } 
      </NextUIProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
