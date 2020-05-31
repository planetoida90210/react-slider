import React from "react";
import leftArrow from "../images/back.svg";
import rightArrow from "../images/next.svg";
const Arrow = ({ direction, handleClick }) => {
  return (
    <>
      {direction === "left" ? (
        <div className='arrow' style={{ left: "25px" }} onClick={handleClick}>
          <img src={leftArrow} alt='back' />
        </div>
      ) : (
        <div className='arrow' style={{ right: "25px" }} onClick={handleClick}>
          <img src={rightArrow} alt='next' />
        </div>
      )}
    </>
  );
};

export default Arrow;
