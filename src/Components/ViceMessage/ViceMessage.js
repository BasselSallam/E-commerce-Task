import React, { useEffect, useState } from 'react'
import './ViceMessage.css'
import { vMessage } from '../../Apis/AxiosAPI'
import Vice from '../../Assets/vice.jpg'



const ViceMessage = () => {

    const [messageData, setMessageData] = useState([])

    useEffect(() => {
        getMessages();

    }, [])

    const getMessages = () => {
        vMessage().then((res) => {
            setMessageData(res.message.vice_president[0].english_description.split('.'))
        })


    }

    return (
        <div>
            <div style={{ height: '100%' }} className='d-flex justify-content-center viceContainer'>

                <div className='viceMessage'>
                    <div className='viceHeader'>Vice President</div>
                    <div>{messageData.map((result, index) => {
                        return <div key={index} style={{ display: index > 1 ? 'none' : '', marginTop: index === 1 ? '0.938vw' : '', marginButtom: index === 1 ? '3.844vw' : '' }} className='viceContent'>- {result}.</div>
                    })}</div>

                </div>
                <div className='vice'>
                    <img className='imgVice' src={Vice} />
                </div>
            </div>
        </div>
    )
}

export default ViceMessage