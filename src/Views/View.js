import React from 'react'
import Navbar from './../Components/Navbar/Navbar';
import Carousel from './../Components/Carousel/Carousel';
import Mattresses from './../Components/Mattresses/Mattresses';
import Message from './../Components/Message/Message';
import ViceMessage from './../Components/ViceMessage/ViceMessage';
import MissionVision from './../Components/Mission&vVision/M&V';
import Product from './../Components/Products/Product';
import Featured from './../Components/Featured/Featured';
import Offers from './../Components/Offers.js/Offers';
import Footer from './../Components/Footer/Footer';


const View = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Mattresses />
            <Message />
            <ViceMessage />
            <MissionVision />
            <Product />
            <Featured />
            <Offers />
            <Footer />
        </div>
    )
}

export default View