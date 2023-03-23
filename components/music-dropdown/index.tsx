import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import ArrowDown from "../../assets/svg/arrow-down.svg";
import { Fragment } from "react";

export default function DropDown() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex gap-2 items-center">
            Music
            <ArrowDown className="dark:fill-[#fff]" />
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
          <Menu.Items className="absolute right-0 mt-2 w-[9rem] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            <div className=" py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-switchLight" : ""
                    }  px-2 py-2 text-sm  w-full text-left`}
                  >
                    Reviews
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-switchLight" : ""
                    }  px-2 py-2 text-sm  w-full text-left`}
                  >
                    Features
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-switchLight" : ""
                    }  px-2 py-2 text-sm  w-full text-left`}
                  >
                    Videos
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-switchLight" : ""
                    }  px-2 py-2 text-sm  w-full text-left`}
                  >
                    PSST! New stuff
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
