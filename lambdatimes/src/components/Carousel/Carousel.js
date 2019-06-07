import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselImages: [],
      selectedImageIndex: 0,
      currentImage: ''
    }
  }
  componentDidMount(){
    this.setState(prevState => ({
      ...prevState,
      carouselImages: carouselData,
      currentImage: carouselData[0]
    }))
  }

  leftClick = () => {
    let imageCount = this.state.carouselImages.length - 1;
    let currentIndex;
    if (this.state.selectedImageIndex  === 0) {
      currentIndex = imageCount;
    } else {
      currentIndex = this.state.selectedImageIndex - 1;
    }
    this.setState(prevState => ({
      ...prevState,
      selectedImageIndex: currentIndex,
    }))
  }

  rightClick = () => {
    let imageCount = this.state.carouselImages.length - 1;
    let currentIndex;
    if (this.state.selectedImageIndex === imageCount) {
      currentIndex = 0;
    } else {
      currentIndex = this.state.selectedImageIndex + 1;
    }
    this.setState(prevState => ({
      ...prevState,
      selectedImageIndex: currentIndex,
    }))
  }

  selectedImage = () => {
    return (<img src={this.state.carouselImages[this.state.selectedImageIndex]} style={{display: 'block'}} alt="" />)
  }
  
  render(){
    return (
      <div className="carousel">
         {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}