import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path='/error' element={<ErrorPage/>}/>
    </Routes>
  )
}

export default App