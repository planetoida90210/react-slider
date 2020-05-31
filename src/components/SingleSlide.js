import React from "react";

const SingleSlide = ({ content }) => {
  return (
    <div
      className='single-slide-container'
      style={{
        backgroundImage: `url(${content})`,
      }}
    ></div>
  );
};

export default SingleSlide;
