import Header from "@/components/navbar";
import "@/styles/globals.css";
import "@/styles/markdown.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Newsletter } from "@/components/newletter";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <Toaster />
        <Header />
        <Component {...pageProps} />
        {pathname !== "/" && <Newsletter />}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
