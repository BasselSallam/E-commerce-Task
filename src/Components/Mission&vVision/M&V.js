import React, { useEffect, useState } from 'react'
import './M&V.css'
import { missionVision } from '../../Apis/AxiosAPI'
import Vision from '../../Assets/Vision.jpg'
import Mission from '../../Assets/Mission.jpg'
import VisionIcon from '../../Assets/Group 20749.jpg'

const MissionVision = () => {
    const [missionData, setMissionData] = useState([])

    useEffect(() => {
        getMission();

    }, [])

    const getMission = () => {
        missionVision().then((res) => {
            setMissionData(res.message.mission_vision)
        })


    }
    return (
        <div className='mvContainer position-relative'>
            <h1 id='MV'>
                Mission & Vision
            </h1>
            <img className='imgVision' src={Vision} />
            <div className='backgroundVision'></div>
            <div className='mvDetails'>
                <div className='mvData d-flex justify-content-between flex-wrap'>
                    {missionData.map((result,index) => {

                        return <>
                            <div>
                                <div className='text-capitalize' style={{ fontSize: '3.385vw', color: '#14325C', opacity: '20%' }}>{result.type}</div>
                                <img className='imgIcon' src={index == 0 ? Mission : VisionIcon} style={{ marginTop: index === 1 ? '1.277vw' : '' }}/>
                            </div>
                            <div className='text'>
                                {result.english_description}
                            </div>
                        </>
                    })}
                </div>
            </div>
        </div>
    )
}

export default MissionVision