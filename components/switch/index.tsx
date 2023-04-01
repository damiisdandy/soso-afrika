import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

type ColorModeType = "light" | "dark";

export default function ToggleSwitch() {
  const { setTheme } = useTheme();
  const theme = useTheme().theme as ColorModeType;

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="">
      <Switch
        checked={theme === "light"}
        onChange={handleToggle}
        className={`z-0 ${theme === "light" ? "bg-switch" : "bg-switch "}
          relative inline-flex h-[23px] w-[49px] shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 top-1`}
      >
        <span
          aria-hidden="true"
          className={` z-10 translate-y-[.1rem] ${
            theme === "light" ? "translate-x-7" : "translate-x-[.1rem]"
          }
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
          style={{ background: "white" }}
        />
      </Switch>
    </div>
  );
}
