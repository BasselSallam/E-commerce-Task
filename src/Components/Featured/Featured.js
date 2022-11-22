import React, { useEffect, useState } from 'react'
import { featuredProducts } from '../../Apis/AxiosAPI'
import './Featured.css'
import featuredImg from '../../Assets/Group 353.jpg'


const Featured = () => {

    const [fProductsData, setFProductsData] = useState([])
    const [fProductsDescriptions, setFProductsDescription] = useState([])
    const [isloading, setIsloading] = useState(true)




    useEffect(() => {
        getFProducts();

    }, [])

    const getFProducts = () => {
        featuredProducts().then((res) => {
            setFProductsData(res.message.featuredProducts[0])
            setFProductsDescription(JSON.parse(res.message.featuredProducts[0].data_english))
            setIsloading(false);

        })


    }
    return (
        <div className='featuredContainer'>
            {isloading ? <div className="spinner-border my-5" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div> :
                <div className='smallContainer position-relative'>
                    <h1 className='fHeader'>
                        Featured Products
                    </h1>
                    <div className='dataContainer'>

                        <div className='_title'>
                            {fProductsData.title_english}
                        </div>
                        <div className='_feeling'>
                            {fProductsData.feeling_english}
                        </div>
                        <div>
                            {fProductsDescriptions.map((res, index) => {

                                return <div key={index} className='dataDiv'>
                                    {res.value}
                                </div>
                            })}
                        </div>

                    </div>
                    <img className='imgFeatured' src={featuredImg} />
                    <div className='backgroundFeatured'></div>
                    <button className='sMore'>See More</button>
                </div>

            }
        </div>
    )
}

export default Featured