import React from 'react';
import { MdAccessTime, MdLocationOn } from 'react-icons/lib/md';
import './EventItem.css';

const EventItem = ({ event }) => {
  return (
    <div>
      <div className='itemContain'>
        {'image' in event && <img src={event.image} alt={event.name} className='image'/>}
        <div className='infoContain'>
          <h4 className='name'>{event.name}</h4>
          <div className='bottomContain'>
            <h3 className='bottomIcon'><MdAccessTime /></h3>
            <p className='bottomLabel'>{event.time}</p>
          </div>
          <div className='bottomContain'>
            <h3 className='bottomIcon'><MdLocationOn /></h3>
            <p className='bottomLabel'>{event.location}</p>
          </div>
          {('tags' in event && event.tags.length > 0) &&
            <div className='bottomContain'>
              {event.tags.map((tag, index) => (
                <div key={index} className='tagContain'>{tag}</div>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default EventItem;
