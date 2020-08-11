import React from 'react';
import Me from '../../../assets/images/Me.JPG'
import './ImageWithText.css'

class ImageWithText extends React.Component {
    render () {
        return (
            <div className = "Profile">
                <img src = {Me} className = "Me"/>
                <h2 className = "bioH2">This is me: Andrew T</h2>
                <p className = "bioP">I wanted to create a website that would allow me to great flash cards and crap</p>
            </div>
        )
    }
}

export default ImageWithText;
