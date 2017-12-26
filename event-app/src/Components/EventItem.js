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
          <div className='bottomContain'>
            <div className='bottomContain'>
              <h3 className='bottomIcon'>P</h3>
              <p className='bottomLabel'>321 Address Here</p>
            </div>
            <div className='bottomContain'>
              <h3 className='bottomIcon'>O</h3>
              <p className='bottomLabel'>7:30pm Thursday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
