import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import "../pages/api/auth/[...nextauth]";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { useDarkMode } from "usehooks-ts";
import { WagmiConfig } from "wagmi";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import PlayerProvider from "~~/context/PlayerContext";
import { SpotifyProvider } from "~~/context/SpotifyContext";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { wagmiClient } from "~~/services/web3/wagmiClient";
import { appChains } from "~~/services/web3/wagmiConnectors";
import "~~/styles/globals.css";

const ScaffoldEthApp = ({ Component, pageProps }: AppProps) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);
  // This variable is required for initial client side rendering of correct theme for RainbowKit
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  useEffect(() => {
    setIsDarkTheme(isDarkMode);
  }, [isDarkMode]);

  return (
    <SessionProvider session={pageProps.session}>
      <WagmiConfig client={wagmiClient}>
        <NextNProgress />
        <RainbowKitProvider
          chains={appChains.chains}
          avatar={BlockieAvatar}
          theme={isDarkTheme ? darkTheme() : lightTheme()}
        >
          <div className="flex flex-col min-h-screen overflow-x-hidden">
            <main className="relative flex flex-col flex-1">
              <SpotifyProvider>
                <PlayerProvider>
                  <Component {...pageProps} />
                </PlayerProvider>
              </SpotifyProvider>
            </main>
          </div>
          <Toaster />
        </RainbowKitProvider>
      </WagmiConfig>
    </SessionProvider>
  );
};

export default ScaffoldEthApp;
