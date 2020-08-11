import React, {useState} from 'react'
import './slideshow.css'
import Slide from './Slide'

class Slideshow extends React.Component {
    
    render () {
        return (
            <div>
                <div className="slideshow-container">
                    <Slide/>
                </div>
                <br/>
                {/* <div style="text-align:center">
                    <span class="dot"></span> 
                    <span class="dot"></span> 
                    <span class="dot"></span> 
                </div> */}
            </div>
        )
    }
}

export default Slideshow;