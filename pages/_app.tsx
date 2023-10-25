import { AppProps } from "next/app";
import "../public/css/styles.css";
import React from "react";

export default function HomePage({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}
