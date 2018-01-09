import React from 'react';
import { MdHome, MdFace, MdPeople, MdShare, MdCamera } from 'react-icons/lib/md';
import './TabNav.css';

const TabNav = ({ activeTab, tabHandler }) => {
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
      name: 'Capture',
      button: <MdCamera />
    },
    {
      name: 'Connections',
      icon: <MdShare />,
    },
    {
      name: 'Profile',
      icon: <MdFace />,
    },
  ];

  return (
    <div className='tabsContain'>
      {tabList.map((tab, index) => (
        <div
          className={activeTab === tab.name && tab.name != 'Capture' ? 'tabContain activeTab' : 'tabContain'}
          onClick={tabHandler}
          id={tab.name}
          key={index}>
          {'icon' in tab && <div className='tabIcon'>{tab.icon}</div>}
          {'button' in tab && <div className='tabCapture'>{tab.button}</div>}
          {/*activeTab === tab.name && <p className='tabLabel'>{tab.name}</p>*/}
        </div>
      ))}
    </div>
  );
}

export default TabNav;
