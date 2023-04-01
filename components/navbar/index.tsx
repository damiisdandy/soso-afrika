import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ModeSwitch from "@/components/mode-switch";
import DropDown from "@/components/music-dropdown";
import CompanyLogo from "@/assets/img/companylogo.png";
import Sidebar from "@/components/sidebar";

const HEADER_TRESHOLD = 400;

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
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

const Header = () => {
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
      className={`z-50 p-3 px-4 sm:px-8 flex items-center justify-between bg-white w-full dark:bg-darkBg fixed top-0 transition duration-300 ease-in ${
        headerVisible ? "translate-y-0" : "translate-y-[-100%]"
      }`}
    >
      <Image
        src={CompanyLogo}
        alt="Company Logo"
        placeholder="blur"
        className="w-10 h-10 cursor-pointer"
        onClick={() => router.push("/")}
      />

      <ul className="hidden sm:flex gap-14 items-center text-textColor dark:text-darkModeText">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <DropDown urlActive={menuActive} />
        </li>
        <li>
          <NavLink href="/about">Who we be</NavLink>
        </li>
        <li>
          <ModeSwitch />
        </li>
      </ul>

      <Sidebar />
    </nav>
  );
};

export default Header;
