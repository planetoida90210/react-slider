import React, { useState } from "react";
import SliderContent from "./SliderContent";
import Arrow from "./Arrow";
import Dots from "./Dots";

const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1555232967-d2c10a468149?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80",
    "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2216&q=80",
    "https://images.unsplash.com/photo-1509680859026-7d8cfc6894f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1584183187666-ccea8b8d88c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  ];
  //seting up widnow width for translateX images
  const windowWidth = () => window.innerWidth;
  //passing down by props translate transform and width for carousel slider
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.4,
  });
  // destructure state
  const { translate, transition, activeIndex } = state;

  //next slide passing in Arrow component
  const nextSlide = () => {
    // return to first slide
    if (activeIndex === images.length - 1) {
      return setState({
        ...state,
        activeIndex: 0,
        translate: 0,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * windowWidth(),
    });
  };
  // previous slide passing in Arrow component
  const prevSlide = () => {
    // return for last slide
    if (activeIndex === 0) {
      return setState({
        ...state,
        activeIndex: images.length - 1,
        translate: (images.length - 1) * windowWidth(),
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * windowWidth(),
    });
  };

  return (
    <div className='slider-main-container'>
      <SliderContent
        translate={translate}
        transition={transition}
        width={windowWidth() * images.length}
        images={images}
      />
      <Arrow direction='left' handleClick={prevSlide} />
      <Arrow direction='right' handleClick={nextSlide} />
      <Dots images={images} activeIndex={activeIndex} />
    </div>
  );
};

export default Slider;
