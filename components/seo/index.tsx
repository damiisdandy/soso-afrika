import { NextSeo } from "next-seo";
import type { NextSeoProps } from "next-seo";
import Head from "next/head";

interface SeoProps extends NextSeoProps {
  title: string;
  description: string;
  image?: {
    url: string;
  };
}

const Seo = ({ title, description, image, ...rest }: SeoProps) => {
  return (
    <>
      <NextSeo
        {...rest}
        openGraph={{
          title,
          description,
          images: image ? [{ ...image }] : [],
        }}
        twitter={{
          // TODO: add twitter handle
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Seo;
