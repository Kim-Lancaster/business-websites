import React from "react";

function ImageSlider(props){
    

    const sliderStyles = {
        backgroundImage: `url(${props.slides[props.currentIndex].image})`,
    }

    return <div className="slider" style={sliderStyles}><h3>We make the future</h3></div>

}

export default ImageSlider;