import { ReactNode } from "react";
import Header from "@/components/navbar";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Wrapper;
