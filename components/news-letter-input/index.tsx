import { ChangeEventHandler, FormEvent, useState } from "react";

const NewsLetterInput = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleEmailOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mt-8 gap-4 mx-4 sm:mx-0"
    >
      <input
        type="email"
        value={email}
        onChange={handleEmailOnChange}
        name="soso-email"
        className="bg-formBg w-[25rem] p-3 sm:p-4 rounded-lg"
        placeholder="Email address"
      />
      <button
        type="submit"
        title="subscribe"
        className="bg-header rounded-lg px-6 sm:px-14 text-white font-bold"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsLetterInput;
