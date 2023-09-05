import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import IndividualArticle from './components/IndividualArticle'

function App() {

  return (
    <div className='App'>
      <Router>
    <Header />
    <Routes >
          <Route path="/" element={< Home />}></Route>
          <Route path="/articles/:id" element={< IndividualArticle />}></Route>
          </Routes>
          </Router>
    </div>
  )
}
 

export default App
