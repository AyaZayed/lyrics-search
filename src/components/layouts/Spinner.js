import React from 'react'
import spinner from '../../assets/img/spinner.gif'

export default function Spinner() {
    return (
        <div>
            <img src={spinner} alt="loading..." style={{ width: '50px', margin: '40px auto', display: 'block' }} />
        </div>
    )
}