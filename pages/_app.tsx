import { AppProps } from "next/app";
import { hydrate, setup } from "otion";

import options from "../otion.config";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  if (typeof window !== "undefined") {
    setup(options);
    hydrate();
  }

  return <Component {...pageProps} />;
}
