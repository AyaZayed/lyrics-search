import React, { useContext, useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function Lyrics() {
    const [lyrics, setLyrics] = useState('')

    const apiKey = '604ddddfa811aca1e00981f54dd6e60b';

    const trackId = useParams().id
    const location = useLocation()

    const track = location.state.track

    console.log(track)

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setLyrics(data.message.body.lyrics.lyrics_body)
            })
            .catch(err => console.log(err))
    }, [])

    // format lyrics
    function formatLyrics() {
        let lyricsArr = lyrics.split('\n')
        // cut the last lines of the lyrics
        lyricsArr.pop()
        lyricsArr.pop()
        lyricsArr.pop()
        lyricsArr.pop()
        return lyricsArr.map((line, index) => {
            return <p key={index}>{line}</p>
        }
        )
    }

    return (
        <div className='lyrics'>
            <h2>{track.track_name} by {track.artist_name}</h2>
            <h5>Album: {track.album_name}</h5>
            <h5>Explicit Words: {track.explicit}</h5>
            {formatLyrics()}
        </div>
    )
}
