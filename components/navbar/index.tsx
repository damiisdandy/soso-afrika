import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ModeSwitch from "@/components/mode-switch";
import NavLinkDropDown from "@/components/navlink-dropdown";
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
  const router = useRouter();
  const [query, setQuery] = useState("");
  const { isOpen: isSidebarOpen, toggleOpen: toggleSidebar } =
    useDisclosure(false);
  const { isOpen: isSearchOpen, toggleOpen: toggleSearch } =
    useDisclosure(false);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      window.location.href = `/search?q=${query}`;
    }
  };

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

  const menuActive = router.pathname === "/reviews";
  return (
    <div className="relative">
      <nav
        className={`z-50 p-3 px-5 sm:px-8 flex items-center justify-between bg-white w-full dark:bg-darkBg fixed top-0 transition duration-300 ease-in ${
          headerVisible ? "translate-y-0" : "translate-y-[-100%]"
        }`}
      >
        <div className="flex items-center gap-6">
          <Image
            src={CompanyLogo}
            alt="Company Logo"
            placeholder="blur"
            className="w-12 h-12 md:w-10 md:h-10 cursor-pointer"
            onClick={() => router.push("/")}
          />
          <input
            className="px-3 py-1.5 xl:w-[500px] rounded-md border-none outline-none hidden xl:block"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for posts..."
            onKeyDown={onKeyDown}
          />
        </div>

        <ul className="hidden sm:flex gap-14 items-center text-textColor dark:text-darkModeText">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLinkDropDown
              name="Features & Reviews"
              items={[
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
              urlActive={menuActive}
            />
          </li>
          <li>
            <NavLinkDropDown
              name="Psst!"
              items={[
                {
                  name: "Cool Stuff",
                  href: "/cool-stuff",
                },
                {
                  name: "New Stuff",
                  href: "/new-stuff",
                },
              ]}
              urlActive={menuActive}
            />
          </li>
          <li>
            <NavLink href="/about">Soko</NavLink>
          </li>
          <li>
            <ModeSwitch />
          </li>
        </ul>

        <Sidebar
          isOpen={isSidebarOpen}
          toggleOpen={toggleSidebar}
          toggleSearch={toggleSearch}
        />
      </nav>
      <div
        className={`absolute z-40 transition-all block md:hidden ${
          isSearchOpen ? "top-[calc(100%+theme(space.2))]" : "-top-20"
        } left-0 w-screen`}
      >
        <input
          className="w-full px-4 py-2 outline-none border-none"
          value={query}
          placeholder="Search for posts..."
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
};

export default Navbar;
