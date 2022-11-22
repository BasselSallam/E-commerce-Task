import React, { useEffect, useState } from 'react'
import beds from '../../Assets/Carousel1.jpg'
import './Carousel.css'
import { slidersAPI } from '../../Apis/AxiosAPI'

const Carousel = () => {
    const [sliderData, setSliderData] = useState([])
    const [isloading, setIsloading] = useState(true)

    useEffect(() => {
        getSliders();
    }, [])

    const getSliders = () => {
        slidersAPI().then((res) => {
            setSliderData(res.message.sliders)
            setIsloading(false);
        })


    }


    return (
        <div>{isloading ? <div className="spinner-border my-5" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
        </div> : <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

            </div>
            <div className="carousel-inner ">
                <button className='showRoom'>
                    Showroom Chat
                </button>
                {sliderData.length != 0 && sliderData.map((data, index) => {
                    return (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''} img-gradient position-relative`} key={index} data-bs-interval="5000">
                            <div className='blissLine'>
                                <p style={{ fontSize: '2.604vw', color: '#F26522' }}>{data.english_title}</p>
                                <p style={{ fontSize: '1.302vw', color: '#14325C' }}>{data.english_description}</p>
                                <button className='carouselBtn'>Discover Now</button>

                            </div>
                            <img src={beds} className="d-block w-100 ss" />
                        </div>
                    )
                })}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FFFFFF" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FFFFFF" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
        </div>}</div>
    )
}

export default Carousel