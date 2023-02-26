import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Classic.css'


const Classicmove = () => {
    return (
        <React.Fragment>
           <h1 className="bklink">
                Classic Book
           </h1>
            <Slide>
                <div className="each-slide-effect">
                    <div className="cbk1">
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className="cbk2">

                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className="cbk3">
                    </div>
                </div>
            </Slide>
        </React.Fragment>
    );
};

export default Classicmove;