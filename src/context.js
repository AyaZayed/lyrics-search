import React from 'react'
import { useState, useEffect } from 'react'

export const Context = React.createContext()

export function Provider({ children }) {

    const [state, setState] = useState({
        trackList: [],
        heading: 'Top 10 Tracks'
    })

    const api = {
        key: "604ddddfa811aca1e00981f54dd6e60b",
    }

    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${api.key}`)
            .then(res => res.json())
            .then(data => {
                setState({
                    trackList: data.message.body.trackList,
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
