import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Kids.css'


const Kidsmove = () => {
    return (
        <React.Fragment>
           <h1 className="bklink">
                Kids Book
           </h1>
            <Slide>
                <div className="each-slide-effect">
                    <div className="kbk1">
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className="kbk2">

                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className="kbk3">
                    </div>
                </div>
            </Slide>
        </React.Fragment>
    );
};

export default Kidsmove;