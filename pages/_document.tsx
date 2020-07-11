import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { setup } from "otion";
import {
  filterOutUnusedRules,
  getStyleElement,
  VirtualInjector,
} from "react-otion/server";

import options from "../otion.config";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const injector = VirtualInjector();

    setup({ ...options, injector });

    const page = await ctx.renderPage();

    return {
      ...page,
      styles: getStyleElement(filterOutUnusedRules(injector, page.html)),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={"green"} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
