import React from 'react'

import HeaderLeft from './headerLeft/HeaderLeft';
import HeaderRight from './HeaderRight/HeaderRight';
import NavBar from './navBar/NavBar';

import './header.css'

export default function Header() {
  return (
    <div id = 'header'>
      <div id = 'first-bar'>
        <HeaderLeft />
        <div id='foo'></div>
        <HeaderRight />
      </div>
        <NavBar />

        {/* TODO: add navbar */}
        {/* TODO: add bar with time */}
    </div>
  )
}
