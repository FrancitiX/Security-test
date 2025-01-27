import React, { useEffect, useRef, useState } from "react";
import styles from "./../styles/components/Slider.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

function Slider({ data }) {
  const customRenderItem = (item) => (
    <img
      src={item.original}
      alt=""
      style={{ objectFit: "contain", width: "100%", height: "70vh" }}
    />
  );
  return (
    <div className={styles.slider_container}>
      <ImageGallery
        items={data}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showBullets={true}
        autoPlay={true}
        renderItem={customRenderItem}
      />
    </div>
  );
}

// function Slider({ data }) {
//   const listRef = useRef();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const listNode = listRef.current;
//     if (listNode) {
//       const scrollAmount = listNode.offsetWidth * currentIndex;
//       listNode.scrollTo({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   }, [currentIndex]);

//   const scrollToImage = (direction) => {
//     setCurrentIndex((curr) => {
//       if (direction === "prev") {
//         return curr > 0 ? curr - 1 : 0;
//       }
//       if (direction === "next") {
//         return curr < data.length - 1 ? curr + 1 : data.length - 1;
//       }
//       return curr;
//     });
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div className={styles.container}>
//       {/* <div className={`${styles.slider_container} center`}> */}
//       <div className={styles.slider_container}>
//         <div className={styles.left} onClick={() => scrollToImage("prev")}>
//           &#10092;
//         </div>
//         <div className={styles.right} onClick={() => scrollToImage("next")}>
//           &#10093;
//         </div>
//         <ul ref={listRef} className={styles.image_list}>
//           {data.map((item) => (
//             <li key={item.id} className={styles.image_item}>
//               <img src={item.imgUrl} alt={`Slide ${item.id}`} />
//             </li>
//           ))}
//         </ul>
//         <div className={styles.dots_container}>
//           {data.map((_, idx) => (
//             <div
//               key={idx}
//               className={classNames(
//                 styles.dot_container_item,
//                 idx === currentIndex ? styles.active : null
//               )}
//               onClick={() => goToSlide(idx)}
//             >
//               &#9865;
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default Slider;
