import React from 'react'
import { useContext } from 'react'
import { Context } from '../context'
import Track from './Track'

export default function Tracks() {
    const [state] = useContext(Context)
    const { track_list, heading } = state

    return (
        <div className='track-list'>
            <h3 className='text-center mb-4'>{heading}</h3>
            <div className='row'>
                {track_list.map(tr => (
                    <Track key={tr.track.track_id} track={tr} />
                ))}
            </div>
        </div>
    )
}
