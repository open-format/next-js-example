import "@/styles/globals.css";
import { Chains, OpenFormatProvider } from "@openformat/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OpenFormatProvider
      config={{
        networks: [Chains.polygonMumbai],
        appId: "",
        activeChain: "mumbai",
      }}
    >
      <Component {...pageProps} />
    </OpenFormatProvider>
  );
}
