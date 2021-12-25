import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
const Imgslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="./images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-scales.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
};

export default Imgslider;
const Carousel = styled(Slider)`
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  .slick-list {
    overflow: visible;
  }

  li.slick-active button::before {
    color: white;
  }
  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 4px solid transparent;
    transition: 300s;

    &:hover {
      border: 4px solid white;
      cursor: pointer;
    }
  }
`;
