import { Disclosure } from "@headlessui/react";
import { ArrowDown } from "@/assets";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavDisclosure() {
  const { pathname } = useRouter();
  const isActive = (isOpen: boolean) => {
    return isOpen || pathname.toLowerCase().includes("music");
  };
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md rounded-2xl ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex gap-3 font-normal leading-6 text-textColor text-2xl dark:text-darkModeText`}
              >
                <span className={isActive(open) ? "font-bold" : ""}>Music</span>
                <ArrowDown
                  className={`dark:fill-darkModeText relative top-1 ease-in duration-200 ${
                    open ? "-rotate-180 transform" : ""
                  } `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 mt-6 text-xl text-textColor dark:text-darkModeText">
                <Link href="/reviews" className="block mb-4">
                  Reviews
                </Link>
                <Link href="/features" className="block mb-4">
                  Features
                </Link>
                <Link href="/videos" className="block mb-4">
                  Videos
                </Link>
                <Link href="/review#new-stuff" className="block mb-4">
                  PSST! New Stuff
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
