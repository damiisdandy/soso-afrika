import { MdEmail } from "react-icons/md";
import NavDisclosure from "@/components/music-disclosure";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FC } from "react";
import config from "@/config";
import { NavLink } from "../navbar";
import ModeSwitch from "@/components/mode-switch";
import { BsInstagram, BsSearch, BsTwitter } from "react-icons/bs";
import ExternalLink from "../external-link";

type SidebarProps = {
  isOpen: boolean;
  toggleOpen: () => void;
  toggleSearch: () => void;
};

const Sidebar: FC<SidebarProps> = ({ isOpen, toggleOpen, toggleSearch }) => {
  return (
    <div className="w-fit sm:hidden">
      <div className="flex items-center gap-5">
        <button
          onClick={toggleSearch}
          className="bg-[#ddd] active:bg-[#eee] dark:bg-[#333] w-8 h-8 flex items-center justify-center rounded-md"
        >
          <BsSearch className="text-black dark:text-white text-3x" />
        </button>
        <div onClick={toggleOpen}>
          {isOpen ? (
            <IoMdClose className="text-black dark:text-white text-3xl" />
          ) : (
            <RxHamburgerMenu className="text-black dark:text-white text-2xl" />
          )}
        </div>
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
            <NavDisclosure
              toggleOpen={toggleOpen}
              header="Features & Reviews"
              menuContent={[
                {
                  name: "Feed your eyes",
                  href: "/feed-your-eyes",
                },
                {
                  name: "Quick questions",
                  href: "/quick-questions",
                },
                {
                  name: "Things we see",
                  href: "/things-we-see",
                },
              ]}
            />
          </li>
          <li>
            <NavDisclosure
              header="Psst!"
              toggleOpen={toggleOpen}
              menuContent={[
                {
                  name: "Cool Stuff",
                  href: "/cool-stuff",
                },
                {
                  name: "New Stuff",
                  href: "/new-stuff",
                },
              ]}
            />
          </li>
          <li>
            <NavLink href={"/about"}>Soko</NavLink>
          </li>
        </ul>
        <div className=" sm:absolute bottom-10 px-10 flex justify-between w-full items-center">
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
