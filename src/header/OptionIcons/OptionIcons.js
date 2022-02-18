import React from 'react'

import { iconsData } from './OptionIconsData'
import './optionIcons.css'

export default function OptionIcons() {
  return (
    <div id = 'icons-container'>
    <div class='line'>
        {iconsData[0].map(item => { 
            return (
                <a href = {item.href}>
                <img 
                    src = {item.src} 
                    class = {item.className}
                    target = {item.target}
                />
                </a>
            )
        })}
    </div>
    <div className='line'>
    {iconsData[1].map(item => { 
            return (
              <a href = {item.href}>
                <img 
                  src = {item.src}
                  class = {item.className}
                  target = {item.target}
                />
              </a>
            )
          })}
    </div>
    </div>
  )
}
