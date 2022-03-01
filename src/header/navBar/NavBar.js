import React from 'react';

import SearchContainer from './searchContainer/SearchContainer';
import NavBarButtons from './navBarButtons/NavBarButtons';

import './navBar.css';

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <NavBarButtons />
        
        <SearchContainer />
      </div>
    </nav>
  )
}
