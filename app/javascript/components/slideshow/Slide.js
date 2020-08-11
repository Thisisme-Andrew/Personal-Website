import React from 'react'
import img1 from '../../../assets/images/img1.jpg'
import './Slide.css'

const Slide = () => {
    return(                     
        <div className="SlideContainer">
            <div className="Image">
                <img src={img1} style={{"width" : "100%", "height" : "700px"}}/>
            </div>
            <div className="text">Caption Text</div>
        </div>
    )
}

export default Slide;