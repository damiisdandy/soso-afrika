import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ToggleSwitch from "@/components/switch";
import DropDown from "@/components/music-dropdown";
import CompanyLogo from "@/assets/img/companylogo.png";
import ModalForNavigation from "@/components/sidebar";

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

      const direction = currentScroll > prevScrollVal ? "down" : "up";
      if (headerVisible && direction === "down") {
        if (currentScroll < headerHideThreshold) return;
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
      className={` z-50 sm:px-8 items h-[5rem] bg-white w-full dark:bg-darkBg fixed top-0 transition duration-300 ease-in ${
        headerVisible ? "translate-y-0" : "translate-y-[-100%]"
      }`}
    >
      <div className="flex justify-between items-center 2xl:w-[100rem] xl:mx-auto">
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
              <DropDown active={menuActive} />
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
      </div>
    </nav>
  );
};

export default Header;
