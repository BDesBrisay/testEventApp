import React from 'react';
import { MdMenu, MdFilterList } from 'react-icons/lib/md';
import './Header.css';

const Header = ({ activeTab }) => {
  return (
    <div className='header'>
      <h2 className='headerItem'><MdMenu /></h2>
      {activeTab === 'Home' && <h2 className='headerItem'>Eazy-Event</h2>}
      {activeTab === 'Friends' && <h2 className='headerItem'>Friends</h2>}
      {activeTab === 'Connections' && <h2 className='headerItem'>Connections</h2>}
      {activeTab === 'Profile' && <h2 className='headerItem'>Profile</h2>}
      <h2 className='headerItem'><MdFilterList /></h2>
    </div>
  );
}

export default Header;
