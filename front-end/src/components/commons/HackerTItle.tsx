import { useEffect, useRef } from "react";
type Props = {
  text: string;
  intervalTime?: number;
};
const HackerTitle: React.FC<Props> = ({ text, intervalTime }) => {
  const textRef = useRef<null | HTMLHeadingElement>(null);
  const letters = "ABCDEFGHIGKLMOPQRSTUVWXYZ4";
  useEffect(() => {
    let iterations = 0;
    if (textRef && textRef.current) {
      const textArray = textRef.current.innerText.split(" ");
      const interval = setInterval(
        () => {
          if (textRef && textRef.current) {
            if (textArray.length == 1) {
              textRef.current.innerText = textArray[0]
                .split("")
                .map((_letter, idx) => {
                  if (idx < iterations) {
                    return text[idx];
                  }
                  return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
              iterations += 1 / 3;
            } else if (textArray.length > 1) {
              textRef.current.innerText = textArray
                .map((text) => {
                  return text
                    .split("")
                    .map((letter, idx) => {
                      if (idx < iterations) {
                        return letter;
                      } else {
                        return letters[Math.floor(Math.random() * 26)];
                      }
                    })
                    .join("");
                })
                .join(" ");
              iterations += 1 / 6;
            }
          }
        },
        intervalTime ? intervalTime : 30
      );

      if (iterations >= text.length) {
        clearInterval(interval);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textRef]);
  return (
    <h1
      ref={textRef}
      className="text-5xl text-center mt-24 md:text-7xl xl:text-8xl md:text-left"
    >
      {text}
    </h1>
  );
};

export default HackerTitle;
