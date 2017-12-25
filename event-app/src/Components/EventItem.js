import React from 'react';
import './EventItem.css';

const EventItem = ({ event }) => {
  return (
    <div>
      <div className='itemContain'>
        {'image' in event && <img src={event.image} alt={event.name} className='image'/>}
        <div className='infoContain'>
          <p>{event.name}</p>
          <p>{event.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
