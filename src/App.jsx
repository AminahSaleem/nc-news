import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import IndividualArticle from './components/Articles/IndividualArticle'
import Comments from './components/comments/Comments'
import User from "./components/User/User"
import Navigation from "./components/Navigation"
import Topics from './components/Topics'
import NotFound from "./components/ErrorHandling"

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
          <Route path="/topics/:topic" element={<Topics />}></Route>
          <Route path="*" element={< NotFound />}></Route>
          </Routes>
          </Router>
  
    </div>
  )
}
 
export default App