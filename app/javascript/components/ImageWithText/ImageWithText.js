import React from 'react';
import Me from '../../../assets/images/Me.JPG'
import './ImageWithText.css'

class ImageWithText extends React.Component {
    render () {
        return (
            <div className = "Profile">
                <img src = {Me} className = "image"/>
                <div className = "text">
                    <h2 className = "bioH2">This is me: Andrew T</h2>
                    <p className = "bioP">I wanted to create a website that would allow me to great flash cards and crap</p>
                    <form action="https://google.com">
                        <input type="submit" value="More on Me" />
                    </form>
                </div>
            </div>
        )
    }
}

export default ImageWithText;
