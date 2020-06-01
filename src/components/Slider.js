import React, { useState, useRef, useEffect } from "react";
import SliderContent from "./SliderContent";
import Arrow from "./Arrow";
import Dots from "./Dots";

const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1555232967-d2c10a468149?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80",
    "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2216&q=80",
    "https://images.unsplash.com/photo-1509680859026-7d8cfc6894f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  ];
  const firstImage = images[0];
  const secondImage = images[1];
  const lastImage = images[images.length - 1];

  //seting up widnow width for translateX images
  const windowWidth = () => window.innerWidth;
  //passing down by props translate transform and width for carousel slider
  const [state, setState] = useState({
    activeIndex: 0,
    translate: windowWidth(),
    transition: 0.4,
    _images: [lastImage, firstImage, secondImage],
  });

  // destructure state
  const { translate, transition, activeIndex, _images } = state;

  const transitionRef = useRef();
  useEffect(() => {
    transitionRef.current = smoothTransition;
  });

  useEffect(() => {
    const smooth = () => {
      transitionRef.current();
    };
    const transitionEnd = window.addEventListener("transitionend", smooth);
    return () => {
      window.removeEventListener("transitionend", transitionEnd);
    };
  }, []);
  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition]);

  const smoothTransition = () => {
    let _images = [];

    // We're at the last slide.
    if (activeIndex === images.length - 1)
      _images = [images[images.length - 2], lastImage, firstImage];
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeIndex === 0) _images = [lastImage, firstImage, secondImage];
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _images = images.slice(activeIndex - 1, activeIndex + 2);

    setState({
      ...state,
      _images,
      transition: 0,
      translate: windowWidth(),
    });
  };

  const nextSlide = () =>
    setState({
      ...state,
      translate: translate + windowWidth(),
      activeIndex: activeIndex === images.length - 1 ? 0 : activeIndex + 1,
    });

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeIndex: activeIndex === 0 ? images.length - 1 : activeIndex - 1,
    });

  return (
    <div className='slider-main-container'>
      <SliderContent
        translate={translate}
        transition={transition}
        width={windowWidth() * _images.length}
        _images={_images}
      />
      <Arrow direction='left' handleClick={prevSlide} />
      <Arrow direction='right' handleClick={nextSlide} />
      <Dots images={images} activeIndex={activeIndex} />
    </div>
  );
};

export default Slider;
