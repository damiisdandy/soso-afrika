import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

type ColorModeType = "light" | "dark";

export default function ModeSwitch() {
  const { setTheme } = useTheme();
  const theme = useTheme().theme as ColorModeType;

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isLightMode = theme === "light";

  return (
    <Switch
      checked={isLightMode}
      onChange={handleToggle}
      className={`z-0 shadow-inner ${
        isLightMode ? "bg-[#efefef]" : "bg-textColor"
      } relative inline-flex h-7 w-[49px] shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 top-1`}
    >
      <span
        className={`z-10 dark:shadow-none absolute ${
          isLightMode ? "left-[0%]" : "left-[calc(100%-theme(space.7))]"
        }  pointer-events-none h-7 w-7 flex items-center justify-center  rounded-full ring-0 transition-all duration-200 ease-in-out`}
      >
        {isLightMode ? (
          <BsFillSunFill className="text-orange" />
        ) : (
          <BsFillMoonFill className="text-white" />
        )}
      </span>
    </Switch>
  );
}
