import React from 'react'
//import style from '../packs/style.module.css'
import Navbar from './components/NavBar/Navbar'
//import './App.css'
import Me from '../assets/images/Me.JPG'
import Slideshow from './components/slideshow/Slideshow'


class App extends React.Component{
    render () {
        return (
            <div>
                <Navbar/>
                <Slideshow/>
                <h1 className = "title">This is some more Text</h1>
                <p className = "openingP">This is going to be a website and this will be used for some language learning experience</p>
                <div className = "Profile">
                    <img src = {Me} className = "Me"/>
                    <h2 className = "bioH2">This is me: Andrew</h2>
                    <p className = "bioP">I wanted to create a website that would allow me to great flash cards and crap</p>
                </div>
            </div>
        )
    }
}


export default App;