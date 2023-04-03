import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    console.warn("constructor");
    this.state={
      data: false
    }
  }
  componentDidMount() {
    console.warn("componentDidMount");
    this.setState({data: true})
  }
  render() {
    console.warn("render");
    return (
      <div>
        <h1>ComponentDidMount life cycle</h1>
      </div>
    )
  }
}