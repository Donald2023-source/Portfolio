import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ name, href, description, image, idx, stack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: idx * 0.3 }}
      className="my-7 relative w-[20rem] "
    >
      <div className="relative rounded-2xl overflow-hidden">
        <img
          className="h-64 w-full object-cover rounded-2xl"
          src={image}
          alt=""
        />
        <div className="absolute inset-0 rounded-2xl  bg-black/30 h-full w-full"></div>
        <Link
          to={href}
          className="absolute bg-black hover:cursor-pointer opacity-0 hover:opacity-65 transition-all w-full text-2xl top-0 h-full items-center flex justify-center left-0 right-0 mx-auto"
        >
          <FaEye className="" />
        </Link>
      </div>
      <div>
        <h1 className="text-xl font-semibold py-2">{name}</h1>
        <p className="text-sm leading-7 text-textGray">{description}</p>
      </div>

      <div>
        {
          <div className="flex flex-wrap gap-2 mt-3">
            {stack.map((tech, idx) => (
              <motion.span
                initial={{ x: 10, y: 1 }}
                animate={{ x: 10, y: 0 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="py-1 px-3 border border-purple-500/30 text-sm rounded-full"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        }
      </div>
    </motion.div>
  );
};

export default ProjectCard;
