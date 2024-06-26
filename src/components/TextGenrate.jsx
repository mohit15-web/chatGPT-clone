"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../utils/cn";


export const TextGenerateEffect = ({ words }) => {
  console.log(words);
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          console.log(word);
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("")}>
      <div className="mt-4">
        <div className="dataContainer leading-snug">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
