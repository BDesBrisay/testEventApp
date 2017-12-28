import React from 'react';
import EventList from './EventList';
import './MainView.css';

const MainView = ({ activeTab }) => {
  return (
    <div className='mainView'>
      {activeTab === 'Home' && <EventList />}
    </div>
  );
}

export default MainView;
