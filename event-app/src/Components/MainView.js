import React from 'react';
import EventList from './EventList';
import FriendsList from './FriendsList';
import './MainView.css';

const MainView = ({ activeTab }) => {
  return (
    <div className='mainView'>
      {activeTab === 'Home' && <EventList />}
      {activeTab === 'Friends' && <FriendsList />}
      {activeTab === 'Relations' && <h1>Relations List</h1>}
      {activeTab === 'Profile' && <h1>Profile</h1>}
    </div>
  );
}

export default MainView;
