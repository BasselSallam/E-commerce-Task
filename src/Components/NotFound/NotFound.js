import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div class="mainbox">
                <div class="err">4</div>
                <div class="err1">0</div>
                <div class="err2">4</div>
                <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <Link to=''>Home</Link> and try from there.</p></div>
            </div>
        </div>
    )
}

export default NotFound