import React, { Component } from 'react';
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
    return (
      <div>
        <Header activeTab={this.state.activeTab} />
        <MainView activeTab={this.state.activeTab} />
        <TabNav activeTab={this.state.activeTab} tabHandler={this.tabHandler}/>
      </div>
    );
  }
}

export default Body;
