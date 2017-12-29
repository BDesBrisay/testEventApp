import React from 'react';
import './FriendItem.css';

const FriendItem = ({ person }) => {
  return (
    <div className='friendItemContain'>
      {'image' in person && <img src={person.image} className='friendImage' alt={person.name} />}
      {'name' in person && <h3 className='friendName'>{person.name}</h3>}
    </div>
  );
}

export default FriendItem;
