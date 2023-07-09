import Header from "@/components/navbar";
import "@/styles/globals.css";
import "@/styles/markdown.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
