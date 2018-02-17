import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from './HeaderContainer';
import Content from './ContentContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
