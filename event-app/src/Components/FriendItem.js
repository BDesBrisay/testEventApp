import React from 'react';
import { MdChevronRight } from 'react-icons/lib/md';
import './FriendItem.css';

const FriendItem = ({ person }) => {
  return (
    <div>
      <div className='friendItemContain'>
        {'image' in person && <img src={person.image} className='friendImage' alt={person.name} />}
        {'name' in person && <h3 className='friendName'>{person.name}</h3>}
        <MdChevronRight className='friendIcon' />
      </div>
    </div>
  );
}

export default FriendItem;
