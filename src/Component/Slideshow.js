import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slideshow.css'


const slideshow = () => {
    return (
        <Slide>
            <div className="each-slide-effect">
                <div className="image1">
                </div>
            </div>
            <div className="each-slide-effect">
                <div className="image2">
                </div>
            </div>
            <div className="each-slide-effect">
                <div className="image3">
                </div>
            </div>
            <div className="each-slide-effect">
                <div className="image4">
                </div>
            </div>
        </Slide>
    );
};

export default slideshow;