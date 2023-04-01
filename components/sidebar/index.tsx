import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Hamburger from "@/assets/svg/hamburger.svg";
import ToggleSwitch from "@/components/mode-switch";
import Link from "next/link";
import { useRouter } from "next/router";
import { InstagramIcon, TwitterIcon, FaceBookIcon } from "@/assets";
import NavDisclosure from "@/components/nav-disclosure";
import { useDisclosure } from "@/hooks/useDisclosure";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Sidebar() {
  const { isOpen, onClose, toggleOpen } = useDisclosure(false);
  const router = useRouter();

  return (
    <>
      <div className="mr-6 sm:hidden" onClick={toggleOpen}>
        {isOpen ? (
          <IoMdClose className="stroke-black dark:stroke-white text-3xl" />
        ) : (
          <RxHamburgerMenu className="stroke-black dark:stroke-white text-2xl" />
        )}
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto bg-white dark:bg-darkBg ">
            <div className="flex inset-0 min-h-full ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-col h-[100vh] w-[20rem] mx-auto self-center inset-0 max-w-full transform p-6  transition-all text-textColor dark:text-white">
                  <div className="mt-[30vh]">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl mb-12 font-normal leading-6 text-gray-900"
                    >
                      <Link
                        href={"/"}
                        className={`${
                          router.pathname === "/" ? "font-bold" : ""
                        }`}
                      >
                        Home
                      </Link>
                    </Dialog.Title>
                    <NavDisclosure />
                    <Dialog.Title
                      as="h3"
                      className="text-2xl mb-12 font-normal leading-6 text-gray-900"
                    >
                      Who we be
                    </Dialog.Title>
                    <Dialog.Title
                      as="h3"
                      className="text-2xl mb-12 font-normal leading-6 text-gray-900"
                    >
                      <ToggleSwitch />
                    </Dialog.Title>
                  </div>
                  <div className="flex flex-1 gap-6 items-end pb-8">
                    <InstagramIcon className="fill-black dark:fill-white " />
                    <FaceBookIcon className="fill-black dark:fill-white" />
                    <TwitterIcon className="fill-black dark:fill-white" />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
