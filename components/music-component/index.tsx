import Image, { StaticImageData } from "next/image";
import React from "react";
import { MusicControls, Spotify } from "@/assets/assets.export";

type MusicPlaylistProps = {
  img: StaticImageData;
  title: string;
};
const MusicPlaylist = ({ img, title }: MusicPlaylistProps) => {
  return (
    <section className="bg-orange rounded-xl p-6 px-4 sm:px-5 xl:px-12 mt-24 text-white">
      <div>
        <div className="flex flex-col sm:flex-row gap-5 xl:gap-16">
          <Image
            src={img}
            alt={`${title} illustrator`}
            className="w-[30rem] self-center sm:w-[10rem] sm:h-[7rem] lg:h-[15rem] lg:w-[20rem]"
          />
          <div className="flex-1 mt-4 lg:mt-12">
            <h3 className="font-bold text-md md:text-xl">
              KOA II Part 1 Kabza De small
            </h3>
            <span className=" cursor-pointer inline-block rounded-full bg-white px-4 text-black text-[.6rem] py-1">
              Preview
            </span>
            <span className="w-full bg-white rounded-md h-[.4rem] block mt-10">
              &nbsp;
            </span>
          </div>
          <div className="mt-[-2rem] sm:mt-4 lg:mt-12 flex flex-row-reverse sm:flex-col justify-between sm:justify-start items-end">
            <Spotify />
            <MusicControls className="mt-10 ml-[20%]" />
          </div>
        </div>
        <ul className="mt-4">
          <li className="flex justify-between mt-4">
            <span className="hidden sm:block font-bold ">1</span>
            <span className="font-semibold text-sm lg:text-xl">
              Khusela (feat. Msaki) Kabza De Small, Msaki
            </span>
            <span className="opacity-60 font-normal">2:30</span>
          </li>
          <li className="flex justify-between mt-4">
            <span className="hidden sm:block font-bold text-xl">2</span>
            <span className="font-semibold text-sm lg:text-xl">
              Ingabe (feat. Spartz) Kabza De Small, Spartz{" "}
            </span>
            <span className="opacity-60 font-normal">2:30</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MusicPlaylist;
