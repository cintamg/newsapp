import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  c = "Cinta";
  render() {
    return (
      <div>Hello my first class based component. By <u>{this.c}</u></div>
    )
  }
}

