import React, { Component } from 'react';
import './TabNav.css';

class TabNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'Home',
    }
  }

  render() {
    const { tabs } = this.props;
    return (
      <div className='tabsContain'>
        {tabs.map((tab, index) => (
          <div
            className={this.state.activeTab === tab.name ? 'tabContain activeTab' : 'tabContain'}
            onClick={() => {this.setState({activeTab: tab.name})}}
            key={index}>
            <h1 className='tabIcon'>{tab.icon}</h1>
            <p className='tabLabel'>{tab.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default TabNav;
