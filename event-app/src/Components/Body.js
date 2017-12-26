import React, { Component } from 'react';
import { MdHome, MdFace, MdPeople, MdShare } from 'react-icons/lib/md';
import Header from './Header';
import MainView from './MainView';
import TabNav from './TabNav';
import './Body.css';

class Body extends Component {
  render() {
    const tabList = [
      {
        name: 'Home',
        icon: <MdHome />,
      },
      {
        name: 'Friends',
        icon: <MdPeople />,
      },
      {
        name: 'Relations',
        icon: <MdShare />,
      },
      {
        name: 'Profile',
        icon: <MdFace />,
      },
    ];

    return (
      <div>
        <Header />
        <MainView />
        <TabNav tabs={tabList}/>
      </div>
    );
  }
}

export default Body;
