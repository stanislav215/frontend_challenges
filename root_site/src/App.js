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
          <Site img="./assets/dec2bin.png" href="https://loving-swanson-66f3e0.netlify.app" />
          <Site img="./assets/passgen.png" href="https://musing-ptolemy-15169c.netlify.app/"/>
          <Site img="./assets/burger.png" href="https://ecstatic-yalow-374264.netlify.app/"/>
          <Site img="./assets/calendar.png" href="https://vigilant-turing-4f0958.netlify.app/"/>
          <Site img="./assets/coming-soon.png" href="#"/>
          <Site img="./assets/coming-soon.png" href="#"/>
        </div>
      </main>
      </div>

        

    );
  }
}

export default App;
