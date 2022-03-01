import React from 'react'

import { NavBarData } from './NavBarData'

import './navBarButtons.css'

export default function NavBarButtons() {
  return (
    <ul class = 'navbar-nav mr-auto'>
        {NavBarData.map(item => (
            <li class = {item.liClass}>
                <a
                    class = {item.aClass}
                    href = {item.href}
                >
                    {item.value}
                </a>
            </li>
        ))}
    </ul>
  )
}