import React from 'react'
import {Carousel} from "react-bootstrap"
import tracks from "../styles/дорожки2.jpg";
import simulators from "../styles/тренажеры2.jpg";
import trainings from "../styles/занятия2.jpg";
export default function BSCarousel() {
    return (
        <div className='carouseldiv'>
            <Carousel className='carousel'>
                <Carousel.Item className='carouselitem'>
                    <img 
                        style={{height:500, width:750}}
                        className="imgcar"
                        src={tracks}                      
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Кардио-тренажеры</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouselitem'>
                    <img
                        style={{height:500, width:750}}
                        className="imgcar"
                        src={simulators}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Силовые тренажеры</h3>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item className='carouselitem'>
                    <img
                        style={{height:500, width:750}}
                        className="imgcar"
                        src={trainings}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Групповые занятия</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
