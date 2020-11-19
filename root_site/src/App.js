import React, { Component } from 'react';
import Site from './Site'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Front end challanges</h1>

      <main>
        <div className="sites">
          <Site img="./dec2bin.png" href="https://keen-mcnulty-85a198.netlify.app" />
          <Site img="./coming-soon.png" href="#"/>
          <Site img="./coming-soon.png" href="#"/>
          <Site img="./coming-soon.png" href="#"/>
          <Site img="./coming-soon.png" href="#"/>
          <Site img="./coming-soon.png" href="#"/>
        </div>
      </main>
      </div>

        

    );
  }
}

export default App;
