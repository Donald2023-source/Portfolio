import { useForm, ValidationError } from "@formspree/react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xpwleobb");
  if (state.succeeded) {
    return toast.success("Message sent successfully");
  }
  return (
    <div className="flex md:flex-row flex-col items-center justify-between mt-32 gap-10 ">
      <div className="md:w-[50%] flex flex-col md:items-start items-center md:text-left text-center text-sm md:text-base pr-4">
        <h2 className="font-bold text-xl py-2">Contact Me</h2>
        <p className="text-textGray leading-7">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you
        </p>

        <div className="text-5xl py-4 flex items-center gap-4">
          <Link to="https://github.com/Donald2023-source">
            <FaGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/donald-yusuf-950585292/">
            <CiLinkedin />
          </Link>
        </div>
      </div>
      <form
        className="flex-1 flex p-4 w-full flex-col gap-8 md:text-base text-sm border-y border-white/10"
        onSubmit={handleSubmit}
      >
        <fieldset className="flex md:w-[65%] flex-col gap-1">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="py-4 rounded-xl bg-white/10 text-white px-4 outline-none"
            id="email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </fieldset>
        <textarea
          className="py-4 rounded-xl bg-white/10 text-white px-4 outline-none"
          id="message"
          name="message"
          placeholder="Message ..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="w-fit flex items-center justify-center mx-auto px-10 py-3 bg-purple-800 rounded-xl hover:scale-95 transition-all"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
