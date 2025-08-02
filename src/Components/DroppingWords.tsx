import { motion } from "framer-motion";

const sentence = "Welcome to Orbexa";
const words = sentence.split(" ");

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
};

export default function DroppingWords() {
  return (
    <motion.div
      className="text-center text-sm sm:text-base md:text-lg lg:text-3xl font-medium text-gray-600"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <span className="block text-3xl sm:text-6xl text-[var(--text)] font-extrabold">
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            className="inline-block mx-1"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </motion.div>
  );
}
