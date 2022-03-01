import React from 'react'

import OptionIcons from './OptionIcons/OptionIcons'
import FontChanger from './FontChanger/FontChanger'

import './headerRight.css';

export default function HeaderRight() {
  return (
    <div id = 'header-right' >
          <FontChanger />{/* TODO: add font size */}
          <OptionIcons />

          {/* TODO: add language changer */}
    </div>
  )
}