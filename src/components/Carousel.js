import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel.css";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const viewSliderSettings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    const controlSliderSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };

    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          {...viewSliderSettings}
          className='view-slider'
        >
          <div>
            <h3>0-9</h3>
          </div>
          <div>
            <h3>10-19</h3>
          </div>
          <div>
            <h3>10, 100, 1k, 1M</h3>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          {...controlSliderSettings}
          className='control-slider'
        >
          <div>
            <h3>0-9</h3>
          </div>
          <div>
            <h3>10-19</h3>
          </div>
          <div>
            <h3>10, 100, 1k, 1M</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
