import React from "react";
import "./Layout.css";
import Card from './Card';

function Layout(props) {
  return (
    <div
      className="Layout"
      style={{ backgroundImage: "url('images/layoutImg.jpg')" }}
    >
      <div className="inner_layout">
        <div className="LayoutText">
          <div className="InnerText">
            <h2>Find something you’re passionate about.</h2>
          </div>
          <div className="RightSide">
            <div className="RightContent">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry
              </p>
            </div>
              <button className="RightButton" href="google.com">
                Join us
              </button>
          </div>
        </div>
        <div className="LayoutCard">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Layout;

