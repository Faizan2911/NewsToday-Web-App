import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



// class uses
export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API

  render() {
    return (
      <div>

        <Router>

          <NavBar />

          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} key="general" category="General" />} />
            <Route exact path="business" element={<News apiKey={this.apiKey} key="business" category="Business" />} />
            <Route exact path="entertainment" element={<News apiKey={this.apiKey} key="entertainment" category="Entertainment" />} />
            <Route exact path="health" element={<News apiKey={this.apiKey} key="health" category="Health" />} />
            <Route exact path="science" element={<News apiKey={this.apiKey} key="science" category="Science" />} />
            <Route exact path="sports" element={<News apiKey={this.apiKey} key="sports" category="Sports" />} />
            <Route exact path="technology" element={<News apiKey={this.apiKey} key="technology" category="Technology" />} />
          </Routes>

        </Router>
      </div>
    )
  }
}


