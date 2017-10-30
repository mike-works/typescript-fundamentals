import * as React from 'react';


export default class Clock extends React.Component<{ description: string }, { time: Date }> {
  private task: any
  constructor() {
    super();
    this.state = {
      time: new Date()
    }
  }
  componentDidMount() {
    this.task = setInterval(() => {
      this.setState({ time: new Date() });
    }, 14);
  }
  componentWillUnmount() {
    clearInterval(this.task);
  }
  render() {
    return <h1>{this.props.description} {this.state.time.toISOString()}</h1>
  }
}