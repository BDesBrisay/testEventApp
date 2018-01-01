import React from 'react';
import './TabNav.css';

const TabNav = ({ tabs, activeTab, tabHandler }) => {
  return (
    <div className='tabsContain'>
      {tabs.map((tab, index) => (
        <div
          className={activeTab === tab.name ? 'tabContain activeTab' : 'tabContain'}
          onClick={tabHandler}
          id={tab.name}
          key={index}>
          <div className='tabIcon'>{tab.icon}</div>
          {/*activeTab === tab.name && <p className='tabLabel'>{tab.name}</p>*/}
        </div>
      ))}
    </div>
  );
}

export default TabNav;
