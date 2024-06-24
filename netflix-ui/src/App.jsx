import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Netflix from './Pages/Netflix'
import Signup from './Pages/Signup'
import Player from './Pages/Player'
import Movies from './Pages/Movies'
import TVShows from './Pages/TVShows'
import UserLiked from './Pages/UserLiked'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/Signup" element={<Signup/>} />
        <Route exact path="/" element={<Netflix/>} />
        <Route exact path="/Player" element={<Player/>} />
        <Route exact path="/Movies" element={<Movies/>} />
        <Route exact path="/mylist" element={<UserLiked/>} />
        <Route exact path="/Tv" element={<TVShows/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App