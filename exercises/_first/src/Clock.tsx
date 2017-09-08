import * as React from 'react';

interface IClockProps {
  color: string;
}

interface IClockState {
  time: Date;
}

function padNumber(x: number, pad: string): string {
  const str = `${x}`;
  return pad.substring(0, pad.length - str.length) + str;
}

export class Clock extends React.Component<IClockProps, IClockState> {
  private task: number;

  constructor(props: IClockProps) {
    super(props);
    this.state = { time: new Date() };
  }

  public componentDidMount(): void {
    this.task = window.setInterval(() => this.tick(), 20);
  }

  public componentWillUnmount(): void {
    window.clearInterval(this.task);
  }

  public render() {
    const d = this.state.time;
    let time = [
      d.getHours(),
      d.getMinutes(),
      d.getSeconds()
    ].map((x: number) => padNumber(x, '00')).join(':');
    time += `.${padNumber(d.getTime() % 100, '00')}`;
    return (
      <h1 style={ {color: this.props.color} }>
        The time is: { time }
      </h1>
    );
  }

  private tick(): void {
    this.setState({
      time: new Date()
    });
  }
}
