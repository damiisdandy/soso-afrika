import HeroCards from "@/components/hero-cards";
import config from "@/config";
import Seo from "@/components/seo";
import Image from "next/image";
import heroImage from "@/assets/img/hero1.jpeg";
import ExternalLink from "@/components/external-link";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GetServerSideProps } from "next";
import { getPosts } from "@/utils/api";

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  return (
    <>
      <Seo title="Home" description="We Market Africa" />
      <main className="text-white mt-[64px]">
        <section className="sm:grid lg:block place-items-center sm:min-h-[90vh] lg:h-full">
          <div className="fixed bg-[rgba(25,25,25,0.)] backdrop-blur-[5px] dark:bg-[rgba(0,0,0,0.6)] -z-10 h-screen w-screen"></div>
          <div className="fixed overflow-hidden -z-20 h-screen w-screen">
            <Image
              src={heroImage}
              className="w-screen h-screen object-cover origin-center"
              alt="woman wearing trad smiling"
              placeholder="blur"
            />
          </div>
          <section>
            <div className="relative z-20 flex flex-col md:flex-row ">
              <aside className="md:w-[4rem] hidden md:flex md:flex-col items-center justify-center gap-10 mt-[7rem] md:mt-0 md:gap-8 md:justify-end mx-10 mb-12 text-xl md:text-2xl">
                <ExternalLink href={config.social.instagram}>
                  <BsInstagram />
                </ExternalLink>
                <ExternalLink href={config.social.twitter.url}>
                  <BsTwitter />
                </ExternalLink>
                <ExternalLink href={config.social.email}>
                  <MdEmail />
                </ExternalLink>
              </aside>
              <div className="md:border-l border-[#888] dark:border-[#444] mt-20 md:mt-12 lg:mt-16 xl:mt-28 h-full md:overflow-x-hidden flex flex-col justify-end">
                <h1 className="text-header font-extrabold text-4xl md:text-6xl md:mt-4rem px-[1rem] sm:px-[3rem] text-center md:text-left">
                  WE SOKO AFRIKA
                </h1>
                <p className="mt-8 md:leading-10 text-md md:text-xl w-[100%] lg:w-[75%] px-[2rem] sm:px-[3rem] text-center md:text-left">
                  We Soko Afrika translates to We &apos;Market&apos; Afrika,
                  (Soko being Swahili). <br /> Honestly? we are here to use
                  every opportunity to celebrate Afrika. Through her music, her
                  culture, her people, her food, her fashion, her entrepreneurs,
                  her possibilities and her passions!
                </p>
                <div className="flex md:hidden justify-center items-center my-6 text-2xl gap-6">
                  <ExternalLink href={config.social.instagram}>
                    <BsInstagram />
                  </ExternalLink>
                  <ExternalLink href={config.social.twitter.url}>
                    <BsTwitter />
                  </ExternalLink>
                  <ExternalLink href={config.social.email}>
                    <MdEmail />
                  </ExternalLink>
                </div>
                <section className="flex fle-1 pb-12 flex-col md:flex-row md:items-end gap-4 mt-2 sm:mt-[5rem] relative ml-4 md:ml-12 scrollbar-none">
                  <h2 className="font-bold text-xl md:text-2xl md:rotate-[270deg] origin-left mt-20 sm:mt-0 sm:absolute -top-10 md:top-[14.5rem] w-[200px]">
                    Recent Stories
                  </h2>
                  <div className="flex gap-5 xl:gap-6 overflow-x-scroll scrollbar-none md:ml-12">
                    {posts.map(({ id, image, title, slug }) => (
                      <HeroCards
                        key={id}
                        slug={slug}
                        title={title}
                        img={image}
                      />
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data, status } = await getPosts({
    per_page: 6,
    order: "desc",
    orderby: "date",
  });
  if (status) {
    return {
      props: {
        posts: data,
      },
    };
  }
  return {
    props: {
      posts: [],
    },
  };
};
