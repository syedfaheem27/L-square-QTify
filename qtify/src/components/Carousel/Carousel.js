import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

import leftArrow from "../../assets/LeftArrow.svg";
import rightArrow from "../../assets/RightArrow.svg";

const Carousel = ({ children }) => {
  const LeftArrow = ({ onClick }) => {
    return (
      <div className={styles["arrow-container-left"]} onClick={onClick}>
        <img src={leftArrow} alt="" />
      </div>
    );
  };

  const RightArrow = ({ onClick }) => {
    return (
      <div className={styles["arrow-container-right"]} onClick={onClick}>
        <img src={rightArrow} alt="" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
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
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
