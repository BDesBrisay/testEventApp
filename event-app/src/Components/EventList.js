import React from 'react';
import { MdMenu, MdFilterList } from 'react-icons/lib/md';
import EventItem from './EventItem';
import logo1 from '../wisteria.jpg';
import logo2 from '../logo.svg';
import logo3 from '../jupiter.jpg';
import logo4 from '../sampleMap.png';
import logo5 from '../books.jpg';
import logo6 from '../powerlifting.webp';
import './EventList.css';

const EventList = () => {
  const sampleEvents = [
    {
      name: 'Super Secret Book Club Meeting',
      desc: 'We get together and discretely discuss a book we all read',
      location: 'Corner of 28th and Arapahoe',
      time: 'Dec 31 at 10:00AM',
      attendees: '13',
      image: logo5,
    },
    {
      name: 'Pickup Soccer Game',
      desc: 'Run around for a while and occasionally kick a ball into a net',
      location: 'Farrand Field',
      time: 'Dec 31 at 11:30PM',
      attendees: '13',
      image: 'http://www.lewiscountysports.com/wp-content/uploads/2015/12/istock_000020132005medium.jpg',
    },
    {
      name: 'Super Smash Bros Tournament',
      desc: 'Smash the Bros in a super fasion till there are no more Bros to smash',
      location: 'Canada College - Room 666',
      time: 'Oct 11 at 1:30PM',
      attendees: '13',
      image: logo4,
    },
    {
      name: '2017 IPF World Powerlifting Meet',
      desc: 'Watch people lift extremely heavy weights just for the sake of it',
      location: 'CU Boulder - Rec Center',
      time: 'May 23 at 9:00AM - 4:00PM',
      attendees: '13',
      image: logo6,
    },
    {
      name: 'Botanical Garden Tours',
      desc: 'Pretty flowers, healthy dirt, raging alergies.',
      location: 'Anywhere outside during spring',
      time: 'Apr 18 All Day',
      attendees: '13',
      image: logo1,
    },
    {
      name: 'Geminid Meteor Shower Stargazing Party',
      desc: 'Open your eyes, look up to the skies and see, I\'m just a poor boy, I need no sympathy',
      location: 'Corner of 28th and Arapahoe',
      time: 'Dec 31st at 11:30PM',
      attendees: '13',
      image: logo3,
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
