import React, { useState } from "react";
import SliderContent from "./SliderContent";
import SingleSlide from "./SingleSlide";

const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1555232967-d2c10a468149?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80",
    "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2216&q=80",
    "https://images.unsplash.com/photo-1509680859026-7d8cfc6894f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1584183187666-ccea8b8d88c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  ];
  //passing down by props translate transform and width for carousel slider
  const windowWidth = () => window.innerWidth;
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  });
  // destructure state to pass in props
  const { translate, transition } = state;
  return (
    <div className='slider-main-container'>
      <SliderContent
        translate={translate}
        transition={transition}
        width={windowWidth() * images.length}
        images={images}
      ></SliderContent>
    </div>
  );
};

export default Slider;
