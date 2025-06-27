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
        className={`relative z-0 w-full ${styles.paddingY}`}
        id={idName}
      >
        <div className={`mx-auto w-full ${styles.paddingX} max-w-7xl`}>
          <span className="block h-0" />
          <Component />
        </div>
      </motion.section>
    );
  };

export default SectionWrapper;
