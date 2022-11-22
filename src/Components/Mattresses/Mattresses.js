import React, { useEffect, useMemo, useState } from 'react'
import './Mattresses.css'
import Carousel from 'better-react-carousel'
import Cards from '../Cards/Cards'
import { _mattersses } from '../../Apis/AxiosAPI'
import { useDispatch } from './../../../node_modules/react-redux/es/hooks/useDispatch';
import addProduct from '../Redux/Action/Action'



const Mattresses = () => {
    const [mattresses, setMattresses] = useState([])
    const [reduxData, setReduxData] = useState([])
    const [isloading, setIsloading] = useState(true)

    const widthOffset = [
        {
            breakpoint: 1920,
            cols: 3,
            rows: 1,
            gap: 5,
            loop: true,
            autoplay: false
        }
    ]

    const MyLeftArrow = (
        <span
            id='leftArrow'
        ></span >
    )
    const MyRightArrow = (
        <span
            id='rightArrow'
        ></span >
    )

    const dispatch = useDispatch();

    useEffect(() => {
        getMattersses();
    }, [])

    const getMattersses = async () => {
        const value = await _mattersses()
        setMattresses(value.message.productTypes)
        setIsloading(false);
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
        <div className='matContainer' id='matCont'>
            <h1 id='Mat'>
                Our Mattresses Lines
            </h1>
            {isloading ? <div className="spinner-border my-5" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div> :
                <div classNameName='tabs'>
                    <ul className="nav nav-pills mb-3 flex-nowrap" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="navLinks active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Bliss Line</button>
                        </li>
                        <div class="vr"></div>
                        <li className="nav-item" role="presentation">
                            <button className="navLinks" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Sleep Spa</button>
                        </li>
                        <div class="vr"></div>
                        <li className="nav-item" role="presentation">
                            <button className="navLinks" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Essential</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                            <Carousel responsiveLayout={widthOffset} loop={true} arrowLeft={MyLeftArrow} arrowRight={MyRightArrow}>
                                {mattresses[0]?.products.map((result, index) => {
                                    return <Carousel.Item key={result.id}>
                                        <Cards
                                            width='9.531vw'
                                            height='2.917vw'
                                            padding='1.589vw'
                                            marginTop='3.021vw'
                                            marginBottom='2.604vw'
                                            cardBodyMarginBot='1.146vw'
                                            cardBodyWidth='28.04vw'
                                            afterPrice={Math.ceil(result.afterPrice)}
                                            beforePrice={Math.ceil(result.beforePrice)}
                                            title_english={result.title_english}
                                            imageCode={result.imageCode || ''}
                                            description_english={result.description_english}
                                            prdData={result}
                                            clickHandler={addProductFn}
                                        />
                                    </Carousel.Item>
                                })}
                            </Carousel>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="1">
                            <Carousel responsiveLayout={widthOffset} loop={true} arrowLeft={MyLeftArrow} arrowRight={MyRightArrow}>
                                {mattresses[1]?.products.map((result, index) => {
                                    return <Carousel.Item key={result.id}>
                                        <Cards
                                            width='9.531vw'
                                            height='2.917vw'
                                            padding='1.589vw'
                                            marginTop='3.021vw'
                                            marginBottom='2.604vw'
                                            cardBodyMarginBot='1.146vw'
                                            cardBodyWidth='28.04vw'
                                            afterPrice={Math.ceil(result.afterPrice)}
                                            beforePrice={Math.ceil(result.beforePrice)}
                                            title_english={result.title_english}
                                            imageCode={result.imageCode || ''}
                                            description_english={result.description_english}
                                            prdData={result}
                                            clickHandler={addProductFn}
                                        />
                                    </Carousel.Item>
                                })}
                            </Carousel>
                        </div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="2">
                            <Carousel responsiveLayout={widthOffset} loop={true} arrowLeft={MyLeftArrow} arrowRight={MyRightArrow}>
                                {mattresses[2]?.products.map((result, index) => {
                                    return <Carousel.Item key={result.id}>
                                        <Cards
                                            width='9.531vw'
                                            height='2.917vw'
                                            padding='1.589vw'
                                            marginTop='3.021vw'
                                            marginBottom='2.604vw'
                                            cardBodyMarginBot='1.146vw'
                                            cardBodyWidth='28.04vw'
                                            afterPrice={Math.ceil(result.afterPrice)}
                                            beforePrice={Math.ceil(result.beforePrice)}
                                            title_english={result.title_english}
                                            imageCode={result.imageCode || ''}
                                            description_english={result.description_english}
                                            prdData={result}
                                            clickHandler={addProductFn}
                                        />
                                    </Carousel.Item>
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
            }</div>
    )
}

export default Mattresses