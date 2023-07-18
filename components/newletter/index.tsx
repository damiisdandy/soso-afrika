import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

type FormValues = {
  name: string;
  email: string;
};

export const Newsletter = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    const { email, name } = data;
    const names = name.split(" ");
    const res = await axios.post<{ status: boolean; message: string }>(
      "/api/mailchimp",
      {
        email,
        firstName: names[0],
        lastName: names.length > 1 ? names[1] : "",
      }
    );
    const { status, message } = res.data;
    if (status) {
      toast.success(message);
      reset();
    } else {
      toast.error(message);
    }
    setLoading(false);
  };

  return (
    <section className="bg-[#eee] dark:bg-[#232323] p-4 flex items-center justify-center flex-col gap-7 pb-8 xl:pb-12">
      <h3 className="text-center text-xl sm:text-2xl font-bold uppercase">
        Sign up for our newsletter
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-end gap-2"
      >
        <input
          {...register("name")}
          className="px-4 py-2 w-[85vw] lg:w-[40vw] rounded-md border-none outline-none"
          placeholder="Enter Full Name"
        />
        <input
          {...register("email")}
          className="px-4 py-2 w-[85vw] lg:w-[40vw] rounded-md border-none outline-none"
          placeholder="Enter Email"
          type="email"
        />
        <button className="bg-header px-4 py-2 text-white rounded-md font-bold">
          {loading ? "Loading..." : "Subscribe"}
        </button>
      </form>
    </section>
  );
};
