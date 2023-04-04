import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ModeSwitch from "@/components/mode-switch";
import NavMusicDropDown from "@/components/music-dropdown";
import CompanyLogo from "@/assets/img/companylogo.png";
import Sidebar from "@/components/sidebar";
import { useDisclosure } from "@/hooks/useDisclosure";

const HEADER_TRESHOLD = 400;

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export const NavLink = ({ href, children }: NavLinkProps) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${router.pathname === href ? "font-bold" : ""}`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const { isOpen: isSidebarOpen, toggleOpen: toggleSidebar } =
    useDisclosure(false);

  //puts a restriction on the body when the modal is opened since we want nop activity going on the bg
  useEffect(() => {
    const htmlBody = document.querySelector("body")?.classList;
    isSidebarOpen
      ? htmlBody?.add("body__overflow")
      : htmlBody?.remove("body__overflow");
  }, [isSidebarOpen]);

  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    let prevScrollVal: number;

    function handleScroll() {
      const currentScroll = window.scrollY;

      if (typeof prevScrollVal !== "number") {
        prevScrollVal = currentScroll;
        return;
      }

      const direction = currentScroll > prevScrollVal ? "down" : "up";
      if (headerVisible && direction === "down") {
        if (currentScroll < HEADER_TRESHOLD) return;
        setHeaderVisible(false);
      } else if (!headerVisible && direction === "up") {
        setHeaderVisible(true);
      }
      prevScrollVal = currentScroll;
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerVisible]);

  const router = useRouter();
  const menuActive = router.pathname === "/reviews";
  return (
    <nav
      className={`z-50 p-3 px-5 sm:px-8 flex items-center justify-between bg-white w-full dark:bg-darkBg fixed top-0 transition duration-300 ease-in ${
        headerVisible ? "translate-y-0" : "translate-y-[-100%]"
      }`}
    >
      <Image
        src={CompanyLogo}
        alt="Company Logo"
        placeholder="blur"
        className="w-12 h-12 md:w-10 md:h-10 cursor-pointer"
        onClick={() => router.push("/")}
      />

      <ul className="hidden sm:flex gap-14 items-center text-textColor dark:text-darkModeText">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavMusicDropDown urlActive={menuActive} />
        </li>
        <li>
          <NavLink href="/about">Who we be</NavLink>
        </li>
        <li>
          <ModeSwitch />
        </li>
      </ul>

      <Sidebar isOpen={isSidebarOpen} toggleOpen={toggleSidebar} />
    </nav>
  );
};

export default Navbar;
