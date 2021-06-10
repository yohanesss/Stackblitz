import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  componentDidMount(){
    console.log('Yeahhhh')
    console.log('Yeahhhh')
    console.log('Yeahhhh')
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
            edited from tab! 
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
