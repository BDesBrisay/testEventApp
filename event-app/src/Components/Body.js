import React, { Component } from 'react';
import { MdHome, MdFace, MdPeople, MdShare } from 'react-icons/lib/md';
import Header from './Header';
import MainView from './MainView';
import TabNav from './TabNav';
import './Body.css';

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'Home',
    }
  }

  tabHandler = (e) => {
    e.preventDefault();
    const { id } = e.currentTarget
    this.setState({activeTab: id});
  }

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
        <Header activeTab={this.state.activeTab} />
        <MainView activeTab={this.state.activeTab} />
        <TabNav tabs={tabList} activeTab={this.state.activeTab} tabHandler={this.tabHandler}/>
      </div>
    );
  }
}

export default Body;
