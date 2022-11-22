import React, { useEffect, useState } from 'react'
import './Cards.css'
import DSC from '../../Assets/DSC_6304.jpg'
import { useSelector } from 'react-redux';

const Cards = (props) => {


    const todos = useSelector(store => store.product);

    return (
        <div>
            <div className="card" style={{ width: `${props.cardBodyWidth}`, height: `${props.cardBodyHeight}` }}>
                <img src={DSC} alt="..." />
                <p className="card-title">{props.title_english}</p>
                <div className="card-body" style={{ padding: `${props.padding}` }}>
                    <div className='card-info' style={{ marginBottom: `${props.cardBodyMarginBot}` }}>
                        <p>{props.imageCode}</p>
                        <div className='d-flex justify-content-around prices'>
                            <p className='text-decoration-line-through oldPrice'>{props.beforePrice} EGP</p>
                            <p>{props.afterPrice} EGP</p>
                        </div>
                    </div>
                    <div className='text-start'>
                        <span style={{ color: '#F26522' }}>- </span><span>
                            {props.description_english}
                        </span>
                    </div>
                    <div className='d-flex justify-content-around btnParent' style={{ marginTop: `${props.marginTop}`, marginBottom: `${props.marginBottom}` }}>
                        <button className='addToCart' style={{ width: `${props.width}`, height: `${props.height}` }} onClick={()=>props.clickHandler(props.prdData)}>Add To Cart</button>
                        <button className='moreDetails' style={{ width: `${props.width}`, height: `${props.height}` }}>More Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards