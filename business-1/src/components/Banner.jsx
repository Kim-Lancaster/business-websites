import React, { useState } from "react";
import ImageSlider from "./ImageSlider";

function Banner() {
    const [currentIndex, setIndex] = useState(0);

    const slides = [
        {image: 'http://localhost:3000/science1.jpg', title: "dna stuff"},
        {image: 'http://localhost:3000/science2.jpg', title: "science stuff"},
        {image: 'http://localhost:3000/science3.jpeg', title: "all the science"}
    ]

    function goToNext(){
        if(currentIndex < slides.length - 1){
            setIndex(currentIndex + 1)
        } else {
            setIndex(0);
        } 
    }
    function goToPrevious(){
        if(currentIndex === 0){
            setIndex(slides.length -1)
        } else {
            setIndex(currentIndex - 1)
        }

    }
    return <div className="banner-container">
        <div className="left-arrow" onClick={goToPrevious}>‹</div>
        <ImageSlider slides={slides} currentIndex={currentIndex} /> 
        <div className="right-arrow" onClick={goToNext}>›</div>
        </div>
}

export default Banner