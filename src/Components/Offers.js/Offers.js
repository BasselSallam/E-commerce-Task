import React, { useEffect, useState } from 'react'
import './Offers.css'
import { OffersApi } from '../../Apis/AxiosAPI'


const Offers = () => {

    const [offers, setOffers] = useState([])

    useEffect(() => {
        getOffers();

    }, [])

    const getOffers = () => {
        OffersApi().then((res) => {
            setOffers(res.message.offers[0])
        })
    }
    return (
        <div className='offersContainer'>
            <h1 className='ourOffers'>
                Our Offers
            </h1>
            <div className='save'>
                {offers.english_title}
            </div>
            <div style={{width:'39.896vw',margin:'auto',color:'white'}}>
                Lorem ipsum dolor sit amet. Aut amet porro ex maxime debitis a quia omnis. Ut unde sequi sit suscipit quae At enim consequatur et aliquid molestiae. Sit praesentium natus ex voluptatibus explicabo cum accusamus dicta. Qui magni maiores hic nihil minima qui asperiores velit non harum minima ut inventore aspernatur.
            </div>
            <button className='offerBtn'>
                Discover Now
            </button>
        </div>
    )
}

export default Offers