import { Disclosure } from "@headlessui/react";
import { ArrowDown } from "@/assets";
import Link from "next/link";
import { useRouter } from "next/router";
import { menuItemsContent } from "@/config";
import { MutableRefObject } from "react";

type NavDisclosureProps = {
  toggleOpen: () => void;
};
interface closeDisclosureProps {
  closeDisclosure: (
    focusableElement?:
      | HTMLElement
      | MutableRefObject<HTMLElement | null>
      | undefined
  ) => void;
}

export default function NavDisclosure({ toggleOpen }: NavDisclosureProps) {
  const { pathname } = useRouter();
  const isActive = (isOpen: boolean) => {
    return isOpen || pathname.toLowerCase().includes("music");
  };

  const handleCloseDisclosure = (
    closeDisclosure: (
      focusableElement?:
        | HTMLElement
        | MutableRefObject<HTMLElement | null>
        | undefined
    ) => void
  ) => {
    closeDisclosure();
    toggleOpen();
  };

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md rounded-2xl ">
        <Disclosure>
          {({ open, close }) => (
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
                {menuItemsContent.map((itemContent) => (
                  <Link
                    key={itemContent.menuContent}
                    href={itemContent.href}
                    className="block mb-4"
                    onClick={() => handleCloseDisclosure(close)}
                  >
                    {itemContent.menuContent}
                  </Link>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
