import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.jpg"

import { AiFillCaretLeft,AiFillCaretRight  } from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"

const defaultStyle={
  color: "#fff",
  background: "#3ab60b"
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", fontSize:50, color:'black', left:'-50px'}}
      onClick={onClick}
      >
      <AiFillCaretLeft></AiFillCaretLeft>
    </div>
  );
}


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", fontSize:50, color:'black'}}
      onClick={onClick}
      >
      <AiFillCaretRight></AiFillCaretRight>
    </div>
  );
}

class ContentSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <div style={{width:'100%',paddingLeft:100, paddingRight:100, boxSizing : 'border-box', ...this.props.style}}>
        <Slider {...settings}>
          <img src={image2} width="100%" height="200px"></img>
          <img src={image1} width="100%" height="200px"></img>
          <img src={image1} width="100%" height="200px"></img>
          <img src={image2} width="100%" height="200px"></img>
        </Slider>
      </div>
    );
  }
}

export default ContentSlider;