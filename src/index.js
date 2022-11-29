import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class App extends React.Component {
  static defaultProps = {
    name: 'Cody',
  };
  static propTypes = {
    name: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }
  render() {
    console.log(this.props);
    return (
      <>
        <p>Contador: {this.state.contador}</p>
        <button
          onClick={() => {
            this.setState({ contador: this.state.contador + 1 });
          }}
        >
          Suma
        </button>
      </>
    );
  }
}

render(<App name={3} />, document.getElementById('root'));
