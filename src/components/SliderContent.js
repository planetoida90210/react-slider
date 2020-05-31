import React from "react";
import SingleSlide from "./SingleSlide";
const SliderContent = ({ translate, transform, width, images }) => {
  return (
    <div
      className='slider-content-container'
      style={{
        transform: `translateX(-${translate}px)`,
        width: `${width}px`,
      }}
    >
      {images.map((image) => (
        <SingleSlide key={image} content={image} />
      ))}
    </div>
  );
};

export default SliderContent;
