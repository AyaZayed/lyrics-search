import { Routes, Route } from 'react-router-dom'
import './css/App.css'
import Layout from './components/layouts/index.js'
import { Provider } from './context'
import Navbar from './components/layouts/Navbar.js'

export default function App() {

  return (
    <>
      <Provider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/track/:id" element={<Lyrics />} />
        </Routes>
      </Provider>
    </>
  )
}
