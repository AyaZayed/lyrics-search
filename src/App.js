import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Layout from './components/layouts/index.js'
import Navbar from './components/layouts/Navbar.js'
import Lyrics from './components/Lyrics.js'
import { ContextController } from './context.js'

export default function App() {
  return (
    <ContextController>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/lyrics/track/:id" element={<Lyrics />} />
      </Routes>
    </ContextController>
  )
}
