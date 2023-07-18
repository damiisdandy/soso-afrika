import { NextSeo } from "next-seo";
import type { NextSeoProps } from "next-seo";
import Head from "next/head";
import config from "@/config";

interface SeoProps extends NextSeoProps {
  title: string;
  description: string;
  image?: {
    url: string;
  };
}

const Seo = ({ title, description, image, ...rest }: SeoProps) => {
  const fullTitle = `SOSO AFRIKA - ${title}`;
  return (
    <>
      <NextSeo
        {...rest}
        title={fullTitle}
        openGraph={{
          title: fullTitle,
          description,
          images: image
            ? [{ ...image }]
            : [
                {
                  url: "/companylogo.jpg",
                },
              ],
        }}
        twitter={{
          // TODO: add twitter handle
          handle: config.social.twitter.username,
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
