import { Routes, Route } from 'react-router-dom'
import './css/App.css'
import { useEffect } from 'react'
import { useState } from 'react'

export default function App() {
  // set up musixmatch api
  const api = {
    key: "604ddddfa811aca1e00981f54dd6e60b",
    base: "https://api.musixmatch.com/ws/1.1/"
  }

  // set up state
  const [query, setQuery] = useState('')
  const [lyrics, setLyrics] = useState('')
  const [track, setTrack] = useState('')
  const [artist, setArtist] = useState('')

  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${artist}&page_size=10&page=1&s_track_rating=desc&apikey=${api.key}`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setLyrics(result.message.body.track_list[0].track.lyrics_id)
      })
  }, [track, artist])

  return (
    <>
      <input type="text" placeholder="Artist" onChange={e => setArtist(e.target.value)} />

      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes> */}
    </>
  )
}
