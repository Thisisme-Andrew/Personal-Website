import React from 'react';
import { MenuItems } from './MenuItems';
import logo from '../../../assets/images/logo.jpg'
import './Navbar.css'

class Navbar extends React.Component{
    render () {
        return (
            <div>
                <div className = "Navbar-logo">
                    <img src = {logo} className = "LogoImage" alt = "Logo" width = "150" height = "50"/>
                    <h1 className = "NavbarItems">Welcome to Lingo<i className = "fab fa-react"/></h1>
                </div>
                <nav>
                    <ul>
                        {MenuItems.map((item, index) => {
                            return(
                                //not entirely sure why index is the key
                                //not entirely sure how item works with map (maybe its built in to map?)
                                <li key = {index}>
                                    <a className = {item.cName} href = {item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;