import * as React from 'react';
import { Clock } from './Clock';

export class App extends React.Component<{}, {}> {
  public render() {
    let x = 4;
    return (
      <div>
        <h2>What time is it?</h2>
        <Clock color={ '#000' } />
      </div>
    );
  }
}