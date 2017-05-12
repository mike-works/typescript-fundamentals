import * as React from 'react';
import Clock from './Clock';

export default class App extends React.Component<{}, {}> {
	render() {
		let x = 4; return (
			<div>
        <h2>What time is it?</h2>
				<Clock color={'#c00'} />
			</div>
		);
	}
}