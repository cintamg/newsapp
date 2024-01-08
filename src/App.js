import './App.css';
import React, { Component } from 'react'
import Navebar from './Components/Navebar';
import News from './Components/News';

export default class App extends Component {
  c = "Cinta";
  render() {
    return (
      <>
      <Navebar/>
      <News/>
      </>
    )
  }
}

