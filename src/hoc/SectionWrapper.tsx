import { motion } from "framer-motion";
import { styles } from "../constants/styles";

interface Props {
  Component: React.ElementType;
  idName: string;
}

const SectionWrapper = (
  Component: Props["Component"],
  idName: Props["idName"]
) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} relative z-0 w-full max-w-7xl mx-auto overflow-hidden`}
        id={idName}
      >
        <span className="hash-span block">&nbsp;</span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
