import * as React  from 'react';

interface IClockProps {
	color: string;
}

interface IClockState {
	time: Date;
}


function padNumber(x: number, pad: string) : string {
  var str = '' + x;
  return pad.substring(0, pad.length - str.length) + str
}

export default class Clock extends React.Component<IClockProps, IClockState> {
	private _task: number;

	constructor(props) {
		super(props);
		this.state = { time: new Date() };
	}

  public componentDidMount() {
		this._task = window.setInterval(() => this.tick(), 20);    
  }

	tick() {
		this.setState({
			time: new Date()
		});
	}

	public componentWillUnmount() {
		window.clearInterval(this._task);
	}

	render() {
    let d = this.state.time;
    let time = [
      d.getHours(),
      d.getMinutes(),
      d.getSeconds()
    ].map((x) => padNumber(x, '00')).join(':')
    time += `.${padNumber(d.getTime() % 100, '00')}`
		return (
			<h1 style={{ color: this.props.color }}>
				The time is: {time}
			</h1>
		);
	}
}