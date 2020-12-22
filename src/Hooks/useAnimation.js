import React, { useState, useEffect } from "react";

function useAnimation() {
  const [animation, setAnimation] = useState({});

  useEffect(() => {
    if (animation.trigger) {
      const { settings, targets } = animation;
      switch (settings.type) {
        case "translate":
          targets.forEach((element, i) => {
            element.animate(
              [
                {
                  transform: `translateY(${100 * (targets.length - (i + 1))}%)`,
                },
                {
                  transform: `translateY(0px)`,
                },
              ],
              {
                duration: 2400 / (i + 4),
                easing: "ease-in-out",
              }
            );
          });
          break;
        case "pop":
          targets.forEach((element, i) => {
            element.animate(
              [
                {
                  transform: "scale(0)",
                  opacity: 1,
                },
                {
                  transform: `scale(1)`,
                  opacity: 1,
                },
              ],
              {
                duration: 200,
                delay: i * 200,
                easing: "linear",
              }
            ).onfinish = () => {
              element.style.opacity = 1;
            };
          });
        case "smoothUp":
          targets.forEach((element, i) => {
            element.animate(
              [
                {
                  transform: `translateY(20%)`,
                  opacity: "0.5",
                },
                {
                  transform: `translateY(0px)`,
                  opacity: "1",
                },
              ],
              {
                duration: 1000,

                easing: "ease-in-out",
              }
            );
          });

        default:
          break;
      }
    }
  }, [animation]);

  return { setAnimation };
}

export default useAnimation;
