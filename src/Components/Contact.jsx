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
      <div className="w-[40%] pr-4">
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
          <Link to>
            <CiLinkedin />
          </Link>
        </div>
      </div>
      <form className="flex-1" onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-1">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </fieldset>
        <textarea id="message" name="message" />
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
