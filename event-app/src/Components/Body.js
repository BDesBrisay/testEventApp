import React, { Component } from 'react';
import Header from './Header';
import MainView from './MainView';
import TabNav from './TabNav';
import './Body.css';

class Body extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainView />
        <TabNav />
      </div>
    );
  }
}

export default Body;
