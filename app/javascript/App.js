import React from 'react'
//import style from '../packs/style.module.css'
import Navbar from './components/NavBar/Navbar'
import Slideshow from './components/slideshow/Slideshow'
import HeaderBar from './components/HeaderBar/HeaderBar'
import ImageWithText from './components/ImageWithText/ImageWithText'

class App extends React.Component{
    render () {
        return (
            <div>
                <HeaderBar/>
                <Navbar/>
                <Slideshow/>
                {/* <h1 className = "title">This is some more Text</h1>
                <p className = "openingP">This is going to be a website and this will be used for some language learning experience</p> */}
                <ImageWithText/>
            </div>
        )
    }
}


export default App;