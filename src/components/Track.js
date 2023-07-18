import React from 'react'
import { Link } from 'react-router-dom'

export default function Track({ track }) {
    return (
        <div className='track-item'>
            {track.track.track_name}
            <Link to={`lyrics/track/${track.track.track_id}`}>
                <button>Get the lyrics!</button>
            </Link>
        </div>
    )
}
