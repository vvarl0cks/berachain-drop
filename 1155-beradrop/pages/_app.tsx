import type { AppProps } from "next/app";
import { BerachainArtio } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chain your dApp will work on.
const activeChain = "BerachainArtio";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={BerachainArtio}
    clientId={process.env.TW_CLIENT_ID}
    >
      
      <Head>
        <title>BERACHAIN🐻⛓ - ERC-1155 Edition Drop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Warl0cks x Berachain"
        />
        <meta
          name="keywords"
          content="Berachain"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;