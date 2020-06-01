import React from "react";

const Dot = ({ active }) => {
  return (
    <div>
      {active ? (
        <span className='single-dot' style={{ background: "black" }}></span>
      ) : (
        <span className='single-dot' style={{ background: "white" }}></span>
      )}
    </div>
  );
};

export default Dot;
