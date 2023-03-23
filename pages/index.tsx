import Header from "@/components/navbar";
import Head from "next/head";
import Image from "next/image";
import InstagramIcon from "../assets/svg/instagram.svg";
import FaceBookIcon from "../assets/svg/facebook.svg";
import TwitterIcon from "../assets/svg/twitter.svg";
import HeroCards from "@/components/hero-cards";
import HeroCard1 from "../assets/img/hero-card1.png";
import HeroCard2 from "../assets/img/hero-card2.png";
import HeroCard3 from "../assets/img/hero-card3.png";
import HeroCard4 from "../assets/img/hero-card4.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>SOSO AFRIKA</title>
        <meta name="description" content="We Market Africa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        {/*<section className="bg-heroImg">*/}
        <section className="bg-[url('../assets/img/hero.png')] h-[90vh] flex">
          <aside className="w-[4rem] flex flex-col gap-6 justify-end mx-10 mb-12">
            <Image src={InstagramIcon} alt="Instagram Icon" />
            <Image src={TwitterIcon} alt="Twitter Icon" />
            <Image src={FaceBookIcon} alt="FAcebook Icon" />
          </aside>
          <div className="border-l border-[#403B39] px-[3rem] mt-[5rem] mb-[3rem]">
            <h1 className="text-header font-extrabold text-6xl mt-[4rem]">
              WE SOKO AFRIKA
            </h1>
            <p className="mt-8 uppercase text-lg w-[90%]">
              We Soko Afrika translates to We ‘Market’ Afrika. (Soko being
              Swahili). Honestly? we are here to use every opportunity to
              celebrate Afrika. Through her music, her culture, her people, her
              food, her fashion, her entrepreneurs, her possibilities and her
              passions!
            </p>
            <section className="flex gap-2 mt-[5rem] relative">
              <h2 className="font-bold text-2xl rotate-[270deg] h-fit w-[12rem] absolute top-[12rem] left-[-6rem]">
                Top Stories
              </h2>
              <div className="flex gap-2 ml-12">
                <HeroCards
                  title="ALL HAIL THE KING OF AMAPIANO: Kabza De Small"
                  img={HeroCard1}
                />
                <HeroCards img={HeroCard2} />
                <HeroCards img={HeroCard4} />
                <HeroCards img={HeroCard3} />
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
