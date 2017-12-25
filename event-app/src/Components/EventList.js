import React from 'react';
import EventItem from './EventItem';
import logo from '../logo.svg';
import './EventList.css';

const EventList = () => {
  const sampleEvents = [
    {
      name: 'Super Secret Book Club Meeting',
      desc: 'We get together and discretely discuss a book we all read',
      location: 'Corner of 28th and Arapahoe',
      time: '11:59 Dec 31st',
      attendees: '13',
    },
    {
      name: 'Super Secret Book Club Meeting',
      desc: 'We get together and discretely discuss a book we all read',
      location: 'Corner of 28th and Arapahoe',
      time: '11:59 Dec 31st',
      attendees: '13',
    },
    {
      name: 'Super Secret Book Club Meeting',
      desc: 'We get together and discretely discuss a book we all read',
      location: 'Corner of 28th and Arapahoe',
      time: '11:59 Dec 31st',
      attendees: '13',
      image: logo,
    },
    {
      name: 'Super Secret Book Club Meeting',
      desc: 'We get together and discretely discuss a book we all read',
      location: 'Corner of 28th and Arapahoe',
      time: '11:59 Dec 31st',
      attendees: '13',
    },
    {
      name: 'Super Secret Book Club Meeting',
      desc: 'We get together and discretely discuss a book we all read',
      location: 'Corner of 28th and Arapahoe',
      time: '11:59 Dec 31st',
      attendees: '13',
    },
    {
      name: 'Super Secret Book Club Meeting',
      desc: 'We get together and discretely discuss a book we all read',
      location: 'Corner of 28th and Arapahoe',
      time: '11:59 Dec 31st',
      attendees: '13',
    },
    {
      name: 'Super Secret Book Club Meeting',
      desc: 'We get together and discretely discuss a book we all read',
      location: 'Corner of 28th and Arapahoe',
      time: '11:59 Dec 31st',
      attendees: '13',
    },
  ];

  return (
    <div className='listContain'>
      {sampleEvents.map((event, index) => (
        <EventItem event={event} key={index} />
      ))}
    </div>
  );
}

export default EventList;
