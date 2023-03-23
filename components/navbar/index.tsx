import React from "react";
import Image from "next/image";
import Link from "next/link";
import ToggleSwitch from "../switch";
import { useRouter } from "next/router";
import CompanyLogo from "../../assets/img/cmpanylogo.png";
import DropDown from "../music-dropdown";

const Header = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between px-8 items-center dark:bg-darkBg">
      <div>
        <Image src={CompanyLogo} alt="Company Logo" height={90} width={100} />
      </div>
      <ul className="flex gap-6 items-center text-textColor dark:text-darkModeText mr-6">
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
    </nav>
  );
};

export default Header;
