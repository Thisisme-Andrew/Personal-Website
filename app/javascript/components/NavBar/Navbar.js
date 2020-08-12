import React from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.module.css'

class Navbar extends React.Component{
    render () {
        return (
            <div>
                <nav>
                    <ul className = "ul">
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