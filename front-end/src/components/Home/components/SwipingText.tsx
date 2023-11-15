import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const SwipingText = () => {
  const [t] = useTranslation();
  const words = t("global.home.hero.headerVariants", { returnObjects: true });
  const WordElements = words.map(
    ({ word, idx }: { word: string; idx: number }) => {
      return (
        <motion.span
          key={idx}
          initial={{ top: -80 }}
          animate={{
            top: [null, 0, 100],
            transition: {
              duration: 3,
              delay: 1.5 * (idx + 1),
              repeat: Infinity,
            },
          }}
          className="absolute"
        >
          {word}
        </motion.span>
      );
    }
  );
  return (
    <section className="flex flex-col gap-y-5 text-center mx-auto">
      <h1 className="text-5xl">{t("global.home.hero.header")}</h1>
      <div className="relative text-6xl overflow-hidden h-[60px] flex justify-center">
        {WordElements}
      </div>
    </section>
  );
};

export default SwipingText;
