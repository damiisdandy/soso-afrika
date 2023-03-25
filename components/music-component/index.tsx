import Image, { StaticImageData } from "next/image";
import React from "react";
import MusicControls from "../../assets/svg/music-controls.svg";
import Spotify from "../../assets/svg/spotify.svg";

type MusicPlaylistProps = {
  img: StaticImageData;
  title: string;
};
const MusicPlaylist = ({ img, title }: MusicPlaylistProps) => {
  return (
    <section className="bg-orange rounded-xl p-6 px-12 mt-24 text-[#fff]">
      <div>
        <div className="flex gap-16">
          <Image src={img} alt={`${title} illustrator`} className="w-[20rem]" />
          <div className="flex-1 mt-12">
            <h3 className="font-bold text-xl">KOA II Part 1 Kabza De small</h3>
            <span className=" cursor-pointer inline-block rounded-full bg-[#fff] px-4 text-[#000] text-[.6rem] py-1">
              Preview
            </span>
            <span className="w-full bg-[#fff] rounded-md h-[.4rem] block mt-10">
              &nbsp;
            </span>
          </div>
          <div className="mt-12 flex flex-col items-end">
            <Spotify />
            <MusicControls className="mt-10" />
          </div>
        </div>
        <ul className="mt-4">
          <li className="flex justify-between mt-4">
            <span className="font-bold text-xl">1</span>
            <span className="font-semibold text-xl">
              Khusela (feat. Msaki) Kabza De Small, Msaki
            </span>
            <span className="opacity-60 font-normal">2:30</span>
          </li>
          <li className="flex justify-between mt-4">
            <span className="font-bold text-xl">2</span>
            <span className="font-semibold text-xl">
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
