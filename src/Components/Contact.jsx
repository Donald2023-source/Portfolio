import { useForm, ValidationError } from "@formspree/react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xpwleobb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="flex items-center justify-between my-5 gap-10 ">
      <div className="w-[50%] pr-4">
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
        className="flex-1 flex p-3 flex-col gap-5 border border-white/20"
        onSubmit={handleSubmit}
      >
        <fieldset className="flex w-[65%] flex-col gap-1">
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
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
