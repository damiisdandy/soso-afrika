import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ToggleSwitch from "../switch";
import DropDown from "../music-dropdown";
import CompanyLogo from "@/assets/img/companylogo.png";
import ModalForNavigation from "../modal-phone";

const headerHideThreshold = 400;

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
      // console.log(prevScrollVal, currentScroll);

      const direction = currentScroll > prevScrollVal ? "down" : "up";
      // console.log(direction);
      if (headerVisible && direction === "down") {
        if (currentScroll < headerHideThreshold) return;
        setHeaderVisible(false);
        // console.log(headerVisible);
      } else if (!headerVisible && direction === "up") {
        setHeaderVisible(true);
        // console.log(headerVisible);
      }
      prevScrollVal = currentScroll;
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerVisible]);

  const router = useRouter();
  return (
    <nav
      className={` z-50 flex justify-between sm:px-8 items-center bg-white w-full dark:bg-darkBg sticky top-0 transition duration-300 ease-in ${
        headerVisible ? "translate-y-0" : "translate-y-[-100%]"
      }`}
    >
      <div onClick={() => router.push("/")} className="cursor-pointer">
        <Image src={CompanyLogo} alt="Company Logo" height={90} width={100} />
      </div>

      <ul className="hidden sm:flex gap-6 items-center text-textColor dark:text-darkModeText mr-6">
        <li>
          <Link
            href={"/"}
            className={`${router.pathname === "/" ? "font-bold" : ""}`}
          >
            Home{" "}
          </Link>
        </li>
        <li>
          <Link href={"#"} className={`flex items-center gap-2`}>
            <DropDown />
          </Link>
        </li>
        <li>
          <Link href={"#"}>Who we be </Link>
        </li>
        <li>
          <ToggleSwitch />
        </li>
      </ul>
      <ModalForNavigation />
    </nav>
  );
};

export default Header;
