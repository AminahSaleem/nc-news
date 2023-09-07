import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import IndividualArticle from './components/IndividualArticle'
import Comments from './components/Comments'
import User from "./components/User/User"
import Navigation from "./components/Navigation"

function App() {

  return (
    <div className='App'>
      <Router>
    <Header />
    <Navigation />
    <Routes >
          <Route path="/" element={< Home />}></Route>
          <Route path="/articles/:id" element={< IndividualArticle />}></Route>
          <Route path="/articles/:id/comments" element={< Comments />}></Route>
          <Route path="/users" element={<User />}></Route>
          </Routes>
          </Router>
  
    </div>
  )
}
 
export default App