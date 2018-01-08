import React from 'react';
import { MdChevronRight, MdAccessTime } from 'react-icons/lib/md';
import './FriendItem.css';

const FriendItem = ({ person }) => {
  return (
    <div>
      <div className='friendItemContain'>
        {'image' in person && <img src={person.image} className='friendImage' alt={person.name} />}
        <div className='infoContain'>
          {'name' in person && <h4 className='friendName'>{person.name}</h4>}
          {'metAt' in person &&
            <div className='bottomContain'>
              <h3 className='bottomIcon'><MdAccessTime /></h3>
              <p className='friendTime'>Met on {person.metAt}</p>
            </div>}
        </div>
        <MdChevronRight className='friendIcon' />
      </div>
    </div>
  );
}

export default FriendItem;
