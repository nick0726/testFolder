import Arrow from "components/Arrow";
import React, { useRef, useState } from "react";
import { companiesList } from "components/Landingpage/Section2/companiesList";
import Arrow2 from "components/Arrow2";
const Section2 = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const boxRef = useRef();
  const scrollHandler = (arrow) => {
    if (arrow === "companies_leftArrow" && scrollPos > 0) {
      boxRef.current.scrollTo({
        left: scrollPos - 1248,
        behavior: "smooth",
      });
      setScrollPos(scrollPos - 1248);
    } else if (
      arrow === "companies_rightArrow" &&
      scrollPos < 1248 * Math.floor(companiesList.length / 3)
    ) {
      boxRef.current.scrollTo({
        left: scrollPos + 1248,
        behavior: "smooth",
      });
      setScrollPos(scrollPos + 1248);
    }
  };
  return (
    <div className="section" id="section2">
      <div className="section2_text">
        See what we're made of<span>.</span>
      </div>
      <div className="section2_companies">
        <div className="companies_container">
          {scrollPos > 0 ? (
            <div
              id="companies_leftArrow"
              className="companies_arrow"
              onClick={(e) => scrollHandler(e.target.id)}
            >
              <Arrow />
            </div>
          ) : null}
          {scrollPos < 1248 * Math.floor(companiesList.length / 3) ? (
            <div
              id="companies_rightArrow"
              className="companies_arrow"
              onClick={(e) => scrollHandler(e.target.id)}
            >
              <Arrow />
            </div>
          ) : null}
          <div className="companies_items" ref={boxRef}>
            {companiesList.map((el, idx) => (
              <div className="company" key={idx}>
                <div className="company_logo">
                  <img src={el.logo} alt={el.name} />
                </div>
                <div className="company_name">
                  <div>{el.name}</div>
                  <Arrow2 />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="companies_scrollbar">
          <div className="scroll_indicator">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
      <div className="section2_button">
        <button>See all Virgin Companies</button>
      </div>
      <div className="section2_blank">
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Section2;
