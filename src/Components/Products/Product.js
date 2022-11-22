import React, { useEffect, useState } from 'react'
import './product.css'
import Carousel from 'better-react-carousel'
import Cards from '../Cards/Cards'
import { _products } from '../../Apis/AxiosAPI'
import addProduct from './../Redux/Action/Action';
import { useDispatch } from 'react-redux'

const Product = () => {
    const [productsData, setProductsData] = useState([])
    const [reduxData, setReduxData] = useState([])
    const dispatch = useDispatch();



    const widthOffset = [
        {
            breakpoint: 1920,
            cols: 4,
            rows: 2,
            gap: 3,
            loop: true,
            autoplay: false
        }
    ]
    const MyLeftArrow = (
        <span
            id='leftArrowPrd'
        ></span >
    )
    const MyRightArrow = (
        <span
            id='rightArrowPrd'
        ></span >
    )
    useEffect(() => {
        getProducts();

    }, [])

    const getProducts = () => {
        _products().then((res) => {
            setProductsData(res.message.products)
        })

    }

    const addProductFn = (data) => {
        const localData = JSON.parse(window.localStorage.getItem('cart')) || []
        if (localData.length === 0) {
            window.localStorage.setItem('cart', (JSON.stringify(data)))
            setReduxData([data])
        }
        if (reduxData.length === 0 && localData.length > 0) {
            setReduxData(localData.concat(data))
            window.localStorage.setItem('cart', (JSON.stringify(localData.concat(data))))
        }
        else {
            setReduxData(reduxData.concat(data))
            window.localStorage.setItem('cart', (JSON.stringify(reduxData.concat(data))))
        }
    }
    dispatch(addProduct(reduxData))

    return (
        <div className='prdContainer'>
            <h1 id='prd'>
                Our Products
            </h1>
            <div>
                <Carousel responsiveLayout={widthOffset} arrowLeft={MyLeftArrow} arrowRight={MyRightArrow}>

                    {productsData.map((res) => {

                        return <Carousel.Item key={res.id}>
                            <Cards
                                width='7.292vw'
                                height='2.083vw'
                                marginTop='0.99vw'
                                marginBottom='1.198vw'
                                cardBodyMarginBot='0.573vw'
                                cardBodyWidth='21.469vw'
                                cardBodyHeight='30.042vw'
                                afterPrice={Math.ceil(res.afterPrice)}
                                beforePrice={Math.ceil(res.beforePrice)}
                                title_english={res.title_english}
                                imageCode={res.imageCode}
                                id={res.id}
                                prdData={res}
                                clickHandler={addProductFn}
                                description_english={res.description_english} />
                        </Carousel.Item>


                    })}

                </Carousel>
            </div>
            <button className='seeMore'>See More</button>
        </div>
    )
}

export default Product