import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(
      this.increment.bind(this),
      1000
    )
  }

  increment() {
    this.setState(({ counter }) => {
      return {counter: counter + 1};
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { counter } = this.state;

    return (
      <header>
        <div>This is live reload example of Webpact with React without loosing the state by Mahesh Duddukuri.</div>
        <div>{counter}</div>
      </header>
    );
  }
}
