import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import custom404Lottie from "../config/custom404lottie.json";

export default function Custom404() {
  return (
    <main className="grid place-items-center h-[100vh] overflow-hidden">
      <Player
        src={custom404Lottie}
        loop
        autoplay
        className="max-w-[40rem] max-h-[35rem]"
      />
      <h2 className="text-2xl md:text-3xl font-bold">Page Not Found</h2>
    </main>
  );
}
