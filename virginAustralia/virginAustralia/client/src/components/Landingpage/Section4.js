import React from "react";
import { section4List } from "components/Landingpage/Section4/section4List";
import Arrow2 from "components/Arrow2";
const Section4 = () => {
  return (
    <div className="section" id="section4">
      <div className="section4_contents">
        <div className="contents_container">
          {section4List.map((el, idx) => {
            return (
              <div className="content_item" key={idx}>
                <div>
                  <img src={el.thumbnail} alt="" />
                  <div></div>
                </div>
                <div>{el.title}</div>
                <div>{el.content}</div>
                <div>
                  {el.nextButton}
                  <Arrow2 />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="section4_blank">
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Section4;
