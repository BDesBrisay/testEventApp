import React, { Component } from 'react';
import Header from './Header';
import MainView from './MainView';
import TabNav from './TabNav';
import './Body.css';

class Body extends Component {
  render() {
    const tabList = [
      {
        name: 'Home',
        icon: 'H',
      },
      {
        name: 'Friends',
        icon: 'F',
      },
      {
        name: 'Connections',
        icon: 'C',
      },
      {
        name: 'Profile',
        icon: 'P',
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
