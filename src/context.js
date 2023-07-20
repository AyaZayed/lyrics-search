import React from 'react'
import { useState, useEffect } from 'react'

export const Context = React.createContext()

export function ContextController({ children }) {
    const [state, setState] = useState({
        track_list: [],
        heading: 'Top 10 Tracks'
    })

    const apiKey = process.env.REACT_APP_MM_KEY;

    // musixmatch api
    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setState({
                    track_list: data.message.body.track_list,
                    heading: 'Top 10 Tracks'
                })
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    )
}
