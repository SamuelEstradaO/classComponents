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
      updatedAt: null,
    };
  }

  componentDidMount() {
    console.log('Fui creado');
    let intervalo = setInterval(()=>this.setState({contador: this.state.contador + 1}),1000)
    this.setState({ 
      intv: intervalo
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState, this.state);
    // console.log('Fui actualizado');
    // if (prevState.contador !== this.state.contador) {
    //   this.setState({ updatedAt: new Date() });
    // }
  }

  componentWillUnmount() {
    // alert('Bye');
    clearInterval(this.state.intv)
  }

  updateCounter = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    console.log(this.props);
    return (
      <>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.updateCounter}>Suma</button>
      </>
    );
  }
}

render(<App name={3} />, document.getElementById('root'));
