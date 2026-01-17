import React, { memo } from "react";
import { IoMdArrowDropdown, IoMdMail } from "react-icons/io";

const OurSolution = memo(({ classes, ourSolutionClick }) => {
  return (
    <div className={classes}>
      <p onClick={ourSolutionClick}>
        Our Solutuion... <IoMdArrowDropdown />
      </p>
      <a href="/air-freight-forwarding">Air Frieght Forwarding</a>

      <a href="/road-freight-forwarding">Road Frieght Forwarding</a>

      <a href="/ocean-freight-forwarding">Ocean Frieght Forwarding</a>

      <a href="/warehouse-and-storage">WareHouse And Storage</a>
    </div>
  );
});

export default OurSolution;
