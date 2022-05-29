import React from 'react';
import CountdownTimer from './CountdownTimer';
import Body from './Body.js';
import Direccion from './Direccion.js';
import Itinerario from './Itinerario.js';
import Confirmacion from './Confirmacion.js';
import MesaRegalos from './MesaRegalos';
import Footer from './Footer.js';
import Mensajes from './Mensajes.js'; 
import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function App() {
  const partyDate = new Date('2022-06-24T19:00:00');
  const mensajes = window.location.pathname.split('/')[1];

  if (mensajes === 'mensajes') {
    return (
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      > 
        <Mensajes />
      </ThemeProvider>
    );
  }else {
    return (
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      >
        <header className="App-header d-flex flex-row align-items-center">
          <CountdownTimer targetDate={partyDate} />
        </header>
        <div>
          <Body />
          <Direccion />
          <Itinerario />
          <Confirmacion />
          <MesaRegalos />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
