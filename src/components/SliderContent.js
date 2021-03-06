import React from "react";
import SingleSlide from "./SingleSlide";
const SliderContent = ({ translate, transition, width, _images }) => {
  return (
    <div
      className='slider-content-container'
      style={{
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
        width: `${width}px`,
      }}
    >
      {_images.map((image) => (
        <SingleSlide key={image} content={image} />
      ))}
    </div>
  );
};

export default SliderContent;
