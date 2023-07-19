import React from 'react'
import { Link } from 'react-router-dom'
import { MdLyrics } from 'react-icons/md'

export default function Track({ track }) {
    return (
        <div className='track-item'>
            <h4>{track.track.track_name}</h4>
            <h6>Artsist: {track.track.artist_name}</h6>
            <h6>Album: {track.track.album_name}</h6>
            <Link to={`lyrics/track/${track.track.track_id}`}>
                <button>
                    {/* react-icon MdLyrics */}
                    <MdLyrics />
                    Get the lyrics!</button>
            </Link>
        </div>
    )
}
