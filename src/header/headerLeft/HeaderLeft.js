import React from 'react';

import './HeaderLeft.css';

export default function HeaderLeft() {
  return (
    <div id = 'header-left' class='float-left'>
            <img src='static/1-logo-godlo.png' alt='godlo' height={'200px'} width={'200px'} class = 'header-left-element'></img>
            <h1 class = 'header-left-element'>
              Główny Urząd Miar
            </h1> 
        </div>
  )
}
