import React, { useEffect, useRef, useState } from "react";
import styles from "./../styles/components/Slider.module.css";

function Slider({ data }) {
  const listRef = useRef();
  const [currentID, setCurrentID] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imageNode = listNode.querySelectorAll("li > img")[currentID];

    if (imageNode) {
      //   imageNode.scrollIntoVIew({
      //     behavior: "smooth",
      //   });
    }
  }, [currentID]);

  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setCurrentID((curr) => {
        const firsSlide = currentID === 0;
        return firsSlide ? 0 : curr - 1;
      });
    } else {
      const lastSLide = currentID === data.length - 1;
      if (lastSLide) {
        setCurrentID((curr) => curr++);
      }
    }
  };

  return (
    <div className={styles.slider_container}>
      <span className={styles.before} onClick={() => scrollToImage("prev")}>
        &#10092;
      </span>
      <span className={styles.next} onClick={() => scrollToImage("next")}>
        &#10093;
      </span>
      <div className={styles.slider}>
        <ul ref={listRef}>
          {data.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.img} alt=" imagen" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Slider;
