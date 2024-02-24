import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

import leftArrow from "../../assets/LeftArrow.svg";
import rightArrow from "../../assets/RightArrow.svg";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const Carousel = ({ children, len }) => {
  const [currSlide, setCurrSlide] = useState(0);
  const matches_xs = useMediaQuery("(max-width: 480px)");
  const matches_sm = useMediaQuery("(min-width: 481px) and (max-width:600px)");
  const matches_lg = useMediaQuery("(min-width: 601px) and (max-width:1024px)");
  const matches_xl = useMediaQuery("(min-width: 1025px)");

  let len_modifier;

  if (matches_xs) len_modifier = -1;
  if (matches_sm) len_modifier = -2;
  if (matches_lg) len_modifier = -3;
  if (matches_xl) len_modifier = -6;

  const LeftArrow = ({ onClick, className, style }) => {
    return (
      <div
        className={`${styles["arrow-container-left"]} ${
          currSlide === 0 ? "hide" : ""
        }`}
        onClick={onClick}
      >
        <img src={leftArrow} alt="" />
      </div>
    );
  };

  const RightArrow = ({ onClick }) => {
    return (
      <div
        className={`${styles["arrow-container-right"]} ${
          currSlide === len + len_modifier ? "hide" : ""
        }`}
        onClick={onClick}
      >
        <img src={rightArrow} alt="" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    swipeToSlide: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    afterChange: (curr) => {
      setCurrSlide(curr);
    },
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
