import React from 'react';
import { MdMenu, MdFilterList } from 'react-icons/lib/md';
import EventItem from './EventItem';
import logo from '../wisteria.jpg';
import logo2 from '../logo.svg';
import logo3 from '../jupiter.jpg';
import './EventList.css';

const EventList = () => {
  const sampleEvents = [
    {
      name: 'Super Secret Book Club Meeting',
      desc: 'We get together and discretely discuss a book we all read',
      location: 'Corner of 28th and Arapahoe',
      time: '11:59 Dec 31st',
      attendees: '13',
      image: logo,
    },
    {
      name: 'Pickup Soccer Game',
      desc: 'Kick a ball around and into a net',
      location: 'Farrand Field',
      time: '11:59 Dec 31st',
      attendees: '13',
      image: logo2,
    },
    {
      name: 'Super Secret Book Club Meeting',
      desc: 'We get together and discretely discuss a book we all read',
      location: 'Corner of 28th and Arapahoe',
      time: '11:59 Dec 31st',
      attendees: '13',
      image: logo3,
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
      image: logo3,
    },
    {
      name: 'Super Secret Book Club Meeting',
      desc: 'We get together and discretely discuss a book we all read',
      location: 'Corner of 28th and Arapahoe',
      time: '11:59 Dec 31st',
      attendees: '13',
      image: logo2,
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
      <h2 className='headerItem'>Eazy-Event</h2>
      {sampleEvents.map((event, index) => (
        <EventItem event={event} key={index} />
      ))}
    </div>
  );
}

export default EventList;
