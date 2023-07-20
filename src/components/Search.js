import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { Context } from '../context'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Search() {
    const [state, setState] = useContext(Context)
    const [trackTitle, setTrackTitle] = useState('')
    const [userInput, setUserInput] = useState('')

    const apiKey = '604ddddfa811aca1e00981f54dd6e60b';

    useEffect(() => {
        if (userInput) {
            fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${apiKey}`)
                .then(res => res.json())
                .then(data => {
                    setState({
                        track_list: data.message.body.track_list,
                        heading: 'Search Results'
                    })
                })
                .catch(err => console.log(err))
        }
    }, [trackTitle])

    function findTrack(e) {
        e.preventDefault()
        setTrackTitle(userInput)
    }

    return (
        <div className='search-box'>
            <h1> Search for a song</h1>
            <form onSubmit={findTrack}>
                <label htmlFor='search'>
                    <AiOutlineSearch />
                    <input type='text' id='search' placeholder='Search for a song...'
                        onChange={e => setUserInput(e.target.value)} />
                </label>
                <button
                    className='primary-button'
                    disabled={userInput.length < 1 ? true : false}
                    type='submit'>Search</button>
            </form>
        </div>
    )
}
