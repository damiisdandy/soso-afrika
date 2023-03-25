import React, { FormEvent } from "react";

const NewsLetterInput = () => {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-8 gap-4">
      <input
        type="email"
        name="soso-email"
        className="bg-[#ECECEC] w-[25rem] p-4 rounded-lg"
        placeholder="Email address"
      />
      <button
        type="submit"
        title="subscribe"
        className="bg-header rounded-lg px-14 text-[#fff] font-bold"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsLetterInput;
