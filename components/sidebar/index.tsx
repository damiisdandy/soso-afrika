import { MdEmail } from "react-icons/md";
import NavMusicDisclosure from "@/components/music-disclosure";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FC } from "react";
import config from "@/config";
import { NavLink } from "../navbar";
import ModeSwitch from "@/components/mode-switch";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import ExternalLink from "../external-link";

type SidebarProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

const Sidebar: FC<SidebarProps> = ({ isOpen, toggleOpen }) => {
  return (
    <div className="w-fit sm:hidden">
      <div onClick={toggleOpen}>
        {isOpen ? (
          <IoMdClose className="text-black dark:text-white text-3xl" />
        ) : (
          <RxHamburgerMenu className="text-black dark:text-white text-2xl" />
        )}
      </div>
      {/* Navbar has a height of 72px */}
      <div
        className={`${
          isOpen ? "left-0" : "left-full"
        } fixed w-screen block sm:hidden top-[72px] h-[calc(100vh-72px)] dark:bg-darkBg bg-white transition-all`}
      >
        <ul className="text-textColor pt-[40%] text-2xl dark:text-darkModeText w-screen h-[70vh] px-12 flex items-start gap-12 flex-col">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavMusicDisclosure />
          </li>
          <li>
            <NavLink href="/about">Who we be</NavLink>
          </li>
        </ul>
        <div className="absolute bottom-10 px-10 flex justify-between w-full items-center">
          <div className="flex gap-10 items-center dark:text-darkModeText text-black text-2xl">
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
          <ModeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
