import React, { Component } from 'react';

class LifeCycleExample extends Component {
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출');
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log('constructor 호출');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate 호출');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount 호출');
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate 호출');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate 호출');
  }
  render() {
    console.log('render 호출');
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount 호출');
    this.setState({ updated: true });
  }
}

export default LifeCycleExample;
