import React from 'react';
import CountdownTimer from './CountdownTimer';
import Body from './Body.js';
import Direccion from './Direccion.js';
import Confirmacion from './Confirmacion.js';
import MesaRegalos from './MesaRegalos';
import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function App() {
  const partyDate = new Date('2022-06-24T19:00:00');

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <header className="App-header d-flex flex-row align-items-center">
        <CountdownTimer targetDate={partyDate} />
      </header>
      <body>
        <Body />
        <Direccion />
        <Confirmacion />
        <MesaRegalos />
      </body>
    </ThemeProvider>
  );
}

export default App;
