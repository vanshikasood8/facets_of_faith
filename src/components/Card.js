import React from "react";
import CardUI from "./CardUI";
// import styled from 'styled-components';
import Carousel from "react-elastic-carousel";

function Card(props) {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div>
      <Carousel breakPoints={breakpoints}>
        <CardUI
          backgroundImg="images/layoutImg.jpg"
          Title="Interfaith Tour to Punjab"
          Body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <CardUI
          backgroundImg="images/layoutImg.jpg"
          Title="Interfaith Tour to Punjab"
          Body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <CardUI
          backgroundImg="images/layoutImg.jpg"
          Title="Interfaith Tour to Punjab"
          Body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <CardUI
          backgroundImg="images/layoutImg.jpg"
          Title="Interfaith Tour to Punjab"
          Body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <CardUI
          backgroundImg="images/layoutImg.jpg"
          Title="Interfaith Tour to Punjab"
          Body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <CardUI
          backgroundImg="images/layoutImg.jpg"
          Title="Interfaith Tour to Punjab"
          Body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <CardUI
          backgroundImg="images/layoutImg.jpg"
          Title="Interfaith Tour to Punjab"
          Body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <CardUI
          backgroundImg="images/layoutImg.jpg"
          Title="Interfaith Tour to Punjab"
          Body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <CardUI
          backgroundImg="images/layoutImg.jpg"
          Title="Interfaith Tour to Punjab"
          Body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <CardUI
          backgroundImg="images/layoutImg.jpg"
          Title="Interfaith Tour to Punjab"
          Body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <CardUI
          backgroundImg="images/layoutImg.jpg"
          Title="Interfaith Tour to Punjab"
          Body="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </Carousel>
    </div>
  );
}

export default Card;

// const CardStyle = styled.div`
// display:flex;
// justify-content:space-between;
// `;
