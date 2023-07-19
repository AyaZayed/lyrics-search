import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Lyrics() {
    const [lyrics, setLyrics] = useState('')

    const apiKey = '604ddddfa811aca1e00981f54dd6e60b';

    const trackId = useParams().id

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setLyrics(data.message.body.lyrics.lyrics_body)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='lyrics'>{lyrics}</div>
    )
}
