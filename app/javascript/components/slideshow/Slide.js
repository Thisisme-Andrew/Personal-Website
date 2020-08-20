import React from 'react'
import './Slide.css'

const Slide = (props) => {
    return(                     
        <div className="SlideContainer">
            <div className="Image">
                <img src = {props.src} style={{"width" : "100%", "height" : "700px"}}/>
            </div>
            <div className="text">{props.caption}</div>
        </div>
    )
}

export default Slide;


////      PROPS INDEX      ////

// this.props.src = image source
// this.props.caption = caption text