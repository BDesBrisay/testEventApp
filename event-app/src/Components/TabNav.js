import React, { Component } from 'react';
import './TabNav.css';

class TabNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tabs, activeTab, tabHandler } = this.props;
    return (
      <div className='tabsContain'>
        {tabs.map((tab, index) => (
          <div
            className={activeTab === tab.name ? 'tabContain activeTab' : 'tabContain'}
            onClick={tabHandler}
            id={tab.name}
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
