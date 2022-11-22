import React, { useEffect, useState } from 'react'
import './Message.css'
import President from '../../Assets/boss.jpg'
import { pMessage } from '../../Apis/AxiosAPI'


const Message = () => {

    const [messageData, setMessageData] = useState([])

    useEffect(() => {
        getMessages();

    }, [])

    const getMessages = () => {
        pMessage().then((res) => {
            // console.log(res.message.president_message[0].english_description)
            setMessageData(res.message.president_message[0].english_description.split('.'))
        })


    }
    return (
        <div>
            <h1 id='Mes'>
                Message From The President & Vice President
            </h1>
            <div style={{ height: '100%' }} className='d-flex justify-content-center mesContainer'>
                <div className='president'>
                    <img className='imgPresident' src={President} />
                </div>
                <div className='message'>
                    <div className='presHeader'>President</div>
                    <div>{messageData.map((result, index) => {
                        return <div key={index} style={{ marginTop: index === 1 || index === 3 ? '0.977vw' : '' }} className='mesContent'>- {result}.</div>

                    })}</div>
                </div>
            </div>
        </div>
    )
}

export default Message