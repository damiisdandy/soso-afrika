import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ModeSwitch from "@/components/mode-switch";
import NavLinkDropDown from "@/components/navlink-dropdown";
import CompanyLogo from "@/assets/img/companylogo.png";
import Sidebar from "@/components/sidebar";
import { useDisclosure } from "@/hooks/useDisclosure";
import { useQuery } from "react-query";
import { getPosts } from "@/utils/api";
import { BiLoaderAlt } from "react-icons/bi";
import dayjs from "dayjs";
import ExternalLink from "../external-link";

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
  const {
    isOpen: isSearchResultOpen,
    onOpen: openSearchResult,
    onClose: closeSearchResult,
  } = useDisclosure(false);
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

  const queryInfo = useQuery(
    ["posts", query],
    () => getPosts({ search: query, per_page: 5 }),
    {
      enabled: Boolean(query),
    }
  );

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
          <div className="items-center hidden xl:flex justify-between bg-[#eee] dark:bg-[#141414] rounded-md px-3 py-1.5">
            <input
              className=" xl:w-[500px] h-full  border-none outline-none  bg-transparent  placeholder:text-[#aaa]"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for posts..."
              onKeyDown={onKeyDown}
              onFocus={openSearchResult}
              onBlur={closeSearchResult}
            />
            <BiLoaderAlt
              className={`animate-spin ${
                queryInfo.isLoading ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
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
        <div className="items-center flex xl:hidden justify-between bg-[#eee] dark:bg-[#141414] px-3 py-1.5">
          <input
            className="w-full outline-none border-none block md:none bg-[#eee] dark:bg-[#141414] placeholder:text-[#aaa]"
            value={query}
            placeholder="Search for posts..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            onFocus={openSearchResult}
            onBlur={closeSearchResult}
          />
          <BiLoaderAlt
            className={`animate-spin ${
              queryInfo.isLoading ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
      {isSearchResultOpen &&
        queryInfo.isSuccess &&
        (queryInfo.data.data?.length ?? 0) > 0 && (
          <div className="absolute z-40 bg-white dark:bg-darkBg shadow-lg xl:rounded-md flex gap-1 xl:gap-0 items-start flex-col py-2 w-screen xl:w-[500px] top-[48px] xl:top-3 xl:left-[98px]">
            {queryInfo.data.data?.map((post) => (
              <a
                href={`/posts/${post.slug}`}
                rel="noopener noreferrer"
                target="_self"
                key={post.id}
                className="px-4 py-1 group hover:bg-[#eee] dark:hover:bg-[#141414] w-full"
              >
                <p className="lg:font-semibold xl:font-bold group-hover:underline truncate">
                  {post.title}
                </p>
                <p className="text-[#aaa] text-xs xl:text-sm">
                  Published on {post.date}
                </p>
              </a>
            ))}
          </div>
        )}
    </div>
  );
};

export default Navbar;
