import React from "react";
import Dot from "./Dot";
const Dots = ({ images, activeIndex }) => {
  return (
    <div className='dots-container'>
      {images.map((image, i) => (
        <Dot key={image} active={activeIndex === i} />
      ))}
    </div>
  );
};

export default Dots;
