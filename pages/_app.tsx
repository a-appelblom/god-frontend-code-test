import { AppProps } from "next/app";
import { HelloWorld } from "../src/components/HelloWorld";
import "../public/css/styles.css";
import React from "react";

export default function HomePage({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );
}
