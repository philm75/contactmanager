import React, { Component } from 'react'

export default class Test extends Component {

  componentWillMount() {
    console.log('componentWillMount...');
  }
      
  componentDidMount() {
    console.log('componentDidMount...');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate...');
  }  

  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps...');
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}
