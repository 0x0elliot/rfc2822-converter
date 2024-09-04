import "@/styles/globals.css";
import { useEffect } from "react";
import { clarity } from 'react-microsoft-clarity';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    clarity.init("ny3uvdkd84");
  });

  return <Component {...pageProps} />;
}
