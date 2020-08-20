import React, {useState} from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './slideshow.css'
import Slide from './Slide'
import img1 from '../../../assets/images/img1.jpg'
import img2 from '../../../assets/images/img2.jpg'
import img3 from '../../../assets/images/img3.jpg'
//import Carousel from 'react-bootstrap/Carousel'

// class Slideshow extends React.Component {

//     render() {
//         return (
//             <div>
//                 <div className='container-fluid' >
//                     <div className="row">
//                         <div className="col-sm-12">
//                             <h3>React Bootstrap Carousel</h3>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-12">
//                             <Carousel>

//                                 <Carousel.Item>
//                                     <img
//                                         className="d-block w-100"
//                                         src={img1}
//                                         alt="First slide"
//                                     />
//                                     <Carousel.Caption>
//                                         <h3>First slide label</h3>
//                                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                                     </Carousel.Caption>
//                                 </Carousel.Item>

//                                 <Carousel.Item>
//                                     <img
//                                         className="d-block w-100"
//                                         src={img2}
//                                         alt="Second slide"
//                                     />

//                                     <Carousel.Caption>
//                                         <h3>Second slide label</h3>
//                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                                     </Carousel.Caption>
//                                 </Carousel.Item>

//                                 <Carousel.Item>
//                                     <img
//                                         className="d-block w-100"
//                                         src={img3}
//                                         alt="Third slide"
//                                     />
//                                     <Carousel.Caption>
//                                         <h3>Third slide label</h3>
//                                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                                     </Carousel.Caption>
//                                 </Carousel.Item>

//                             </Carousel>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     };
// }

// class Slideshow extends React.Component{
//     render () {
//         // var slideIndex = 1;
//         // showSlides(slideIndex);
        
//         // function plusSlides(n) {
//         //   showSlides(slideIndex += n);
//         // }
        
//         // function currentSlide(n) {
//         //   showSlides(slideIndex = n);
//         // }
        
//         // function showSlides(n) {
//         //   var i;
//         //   var slides = document.getElementsByClassName("mySlides");
//         //   var dots = document.getElementsByClassName("dot");
//         //   if (n > slides.length) {slideIndex = 1}    
//         //   if (n < 1) {slideIndex = slides.length}
//         //   for (i = 0; i < slides.length; i++) {
//         //       slides[i].style.display = "none";  
//         //   }
//         //   for (i = 0; i < dots.length; i++) {
//         //       dots[i].className = dots[i].className.replace(" active", "");
//         //   }
//         //   slides[slideIndex-1].style.display = "block";  
//         //   dots[slideIndex-1].className += " active";
//         // }
//         return (
            
//             // <div>
//             //     <div className = "slideshow-container">
//             //         <Slide src = {img1} caption = {"Caption 1"}/>
//             //         <Slide src = {img2} caption = {"Caption 2"}/>
//             //         <Slide src = {img3} caption = {"Caption 3"}/>

//             //         <a className = "prev" onclick = "plusSlides(-1)">&#10094;</a>
//             //         <a className = "next" onclick = "plusSlides(1)">&#10095;</a>
//             //     </div>
//             //     <br/>
//             //     <div className = "dot-container">
//             //         <span className = "dot"></span> 
//             //         <span className = "dot"></span> 
//             //         <span className = "dot"></span> 
//             //     </div>
//             // </div>
//         )
//     }
// }

class Slideshow extends React.Component{
    render() {
        return(
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="textColor">First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="textColor">Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="textColor">Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        )
    }
}

export default Slideshow;