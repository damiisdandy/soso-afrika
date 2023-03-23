import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`z-0 ${enabled ? "bg-switch" : "bg-switch "}
          relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={` z-10 translate-y-[.1rem] ${
            enabled ? "translate-x-7" : "translate-x-[.1rem]"
          }
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
          style={{ background: "white" }}
        />
      </Switch>
    </div>
  );
}
