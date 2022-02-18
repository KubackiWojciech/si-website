import React from 'react'

import FontChanger from './FontChanger/FontChanger'
import OptionIcons from './OptionIcons/OptionIcons'

import {iconsData} from './OptionIcons/OptionIconsData'

import './header.css'

export default function Header() {
  return (
    <div id = 'header'>
        <div id = 'header-left' class='float-left'>
            <img src='static/1-logo-godlo.png' alt='godlo' height={'200px'} width={'200px'} class = 'header-left-element'></img>
            <h1 class = 'header-left-element'>
              Główny Urząd Miar
              </h1> 
        </div>
        <div id='foo'></div>
        <div id = 'header-right' class='float-right'>
          {/* TODO: add font size */}
          <FontChanger />
          <OptionIcons />

          {/* TODO: add random links with pictures */}
          {/* TODO: add language changer */}
        </div>
        {/* TODO: add navbar */}
        {/* TODO: add bar with time */}
    </div>
  )
}
