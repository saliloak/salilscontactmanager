import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: '',
    completed: true
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
  }

  //   componentWillMount() {
  //     console.log('Component Will Mount...');
  //   }

  //   componentDidUpdate() {
  //     console.log('Component did update...');
  //   }

  //   componentWillUpdate() {
  //     console.log('Component Will update...');
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log('Component will recieve Props');
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return null;
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log('getSnapshotBeforeUpdate');
  //   }

  render() {
    const { title, body, completed } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
        <h1>{completed ? 'Here' : 'There'}</h1>
      </div>
    );
  }
}

export default Test;
