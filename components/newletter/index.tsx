import NewsLetterInput from "../news-letter-input";

export const Newsletter = () => {
  return (
    <section>
      <h2 className="font-bold text-2xl border-b pb-4 mx-4 sm:mx-10 border-reviewsBorder dark:border-textColor  mt-12">
        Subscribe
      </h2>
      <h3 className="text-center text-xl sm:text-2xl font-bold uppercase mt-14">
        Sign up to new letter pop up
      </h3>
      <NewsLetterInput />
    </section>
  );
};
