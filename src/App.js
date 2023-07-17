import { Route, Router, Routes } from 'react-router-dom'
import './css/App.css'
import Layout from './components/layouts/index.js'
import { Provider } from './context'
import Navbar from './components/layouts/Navbar.js'
import Lyrics from './components/Lyrics.js'

export default function App() {
  return (
    <Provider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/lyrics/track/:id" element={<Lyrics />} />
      </Routes>
    </Provider>
  )
}
