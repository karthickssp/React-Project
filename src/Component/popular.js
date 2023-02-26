import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Popular.css'

const Popularmove = () => {
    return (
        <>
        <h1 className="bpp">Popular Book</h1>
        <React.Fragment>
            <Slide>
                <div className="each-slide-effect">
                    <div className="bk1"></div>
                </div>
                <div className="each-slide-effect">
                    <div className="bk2"></div>
                </div>
                <div className="each-slide-effect">
                    <div className="bk3"></div>
                </div>
            </Slide>
        </React.Fragment>
        
        </>
    );
};

export default Popularmove;