import React from 'react';
import './EventItem.css';

const EventItem = ({ event }) => {
  return (
    <div>
      <div className='itemContain'>
        {'image' in event && <img src={event.image} alt={event.name} className='image'/>}
        <div className='infoContain'>
          <h4 className='name'>{event.name}</h4>
          <p className='desc'>{event.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
