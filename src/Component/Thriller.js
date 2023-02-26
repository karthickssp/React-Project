import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Thriller.css'


const  Thrillermove= () => {
    return (
        <React.Fragment>
           <h1 className="bklink">
                Thriller Book
           </h1>
            <Slide>
                <div className="each-slide-effect">
                    <div className="tbk1">
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className="tbk2">

                    </div>
                </div>
                <div className="each-slide-effect">
                    <div className="tbk3">
                    </div>
                </div>
            </Slide>
        </React.Fragment>
    );
};

export default Thrillermove;