import React from 'react'
import logo from '../../../assets/images/logo.jpg'
import './HeaderBar.css'
import logoPerceive from '../../../assets/images/logoPercieve.png'

class HeaderBar extends React.Component {
    render () {
        return (
            <div className = "Navbar-logo">
                <div className = "LogoImage">
                    <img src = {logoPerceive} alt = "Logo" width = "125px" height = "150px"/>
                </div>
                {/* <h1 className = "NavbarItems">Welcome to Lingo<i className = "fab fa-react"/></h1> */}
            </div>
        )
    }
}

export default HeaderBar;