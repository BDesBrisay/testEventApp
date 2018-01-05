import React from 'react';
import FriendItem from './FriendItem';
import image1 from '../wisteria.jpg';
import image2 from '../logo.svg';
import image3 from '../jupiter.jpg';
import image4 from '../sampleMap.png';
import image5 from '../books.jpg';
import image6 from '../powerlifting.webp';

const FriendsList = () => {
  const sampleFriends = [
    {
      name: 'Chris Long',
      image: image1,
      metAt: 'Jan 1, 2018',
    },
    {
      name: 'Dave \'Stallion\' Higginbottoms',
      image: image2,
      metAt: 'Jan 1, 2018',
    },
    {
      name: 'Wysting Manchester III',
      image: image3,
      metAt: 'Jan 1, 2018',
    },
    {
      name: 'Chris Longer',
      image: image4,
      metAt: 'Jan 1, 2018',
    },
    {
      name: 'Dave \'Medallion\' Higginbottoms',
      image: image5,
      metAt: 'Jan 1, 2018',
    },
    {
      name: 'Wysting Manchester III',
      image: image6,
      metAt: 'Jan 1, 2018',
    },
    {
      name: 'Chris \'Even\' Longer',
      image: image3,
      metAt: 'Jan 1, 2018',
    },
    {
      name: 'Dave \'Quintillion\' Higginbottoms',
      image: image2,
      metAt: 'Jan 1, 2018',
    },
    {
      name: 'Wysting Manchester III',
      image: image3,
      metAt: 'Jan 1, 2018',
    },
  ]

  return (
    <div className='listContain'>
      {sampleFriends.map((friend, index) => (
        <FriendItem person={friend} key={index} />
      ))}
    </div>
  );
}

export default FriendsList;
