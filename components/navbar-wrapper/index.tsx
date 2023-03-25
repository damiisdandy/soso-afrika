import React, { ReactNode } from "react";
import Header from "../navbar";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Wrapper;
