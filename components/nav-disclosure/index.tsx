import { Disclosure } from "@headlessui/react";
import { ArrowDown } from "@/assets";
import Link from "next/link";

export default function NavDisclosure() {
  return (
    <div className="w-full ">
      <div className="mx-auto w-full max-w-md rounded-2xl ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex gap-3 text-2xl mb-12 font-normal leading-6 text-gray-900">
                Music
                <ArrowDown
                  className={`dark:fill-darkModeText relative top-1 ease-in duration-200 ${
                    open ? "-rotate-180 transform" : ""
                  } `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-8 text-sm text-gray-500">
                <Link href={"/reviews"} className="block text-xl mb-4">
                  Reviews
                </Link>
                <Link href={"/"} className="block text-xl mb-4">
                  Features
                </Link>
                <Link href={"/"} className="block text-xl mb-4">
                  Videos
                </Link>
                <Link href={"/"} className="block text-xl mb-4">
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
