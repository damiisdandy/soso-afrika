import { Menu, Transition } from "@headlessui/react";
import { Fragment, MouseEvent, ReactNode } from "react";
import { useRouter } from "next/router";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

type DropDownProps = {
  urlActive: boolean;
};

type MenuItemProps = {
  active: boolean;
  href: string;
  children: ReactNode;
};

const MenuItem = ({ active, href, children }: MenuItemProps) => {
  return (
    <Link
      href={href}
      className={`${
        active ? "bg-switchLight dark:bg-switch" : ""
      }  px-3 py-2 text-sm w-full text-left block hover:bg-switchLight dark:hover:bg-switch`}
    >
      {children}
    </Link>
  );
};

export default function DropDown({ urlActive }: DropDownProps) {
  const router = useRouter();

  const handleReviewsNavigation = (e: MouseEvent) => {
    e.preventDefault();
    router.push("/reviews");
  };

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className={`inline-flex gap-2 items-center ${
              urlActive && "font-bold"
            }`}
          >
            {({ open }) => (
              <div className="flex items-center gap-2">
                <p>Music</p>
                {open ? (
                  <IoIosArrowUp className="dark:fill-white" />
                ) : (
                  <IoIosArrowDown className="dark:fill-white" />
                )}
              </div>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-[9rem] origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-textColor shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className=" py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <MenuItem active={active} href="/reviews">
                    Reviews
                  </MenuItem>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <MenuItem active={active} href="/features">
                    Features
                  </MenuItem>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <MenuItem active={active} href="/videos">
                    Videos
                  </MenuItem>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <MenuItem active={active} href="/reviews#new-stuff">
                    PSST! New stuff
                  </MenuItem>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
