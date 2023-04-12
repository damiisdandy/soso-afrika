import { Custom404Img } from "@/assets";
import React from "react";

export default function Custom404() {
  return (
    <main className="grid place-items-center h-[100vh]">
      <Custom404Img />
      <h2 className="text-3xl font-bold">Page Not Found</h2>
    </main>
  );
}
