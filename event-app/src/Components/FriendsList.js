import React from 'react';
import FriendItem from './FriendItem';
import image1 from '../jupiter.jpg';
import image2 from '../wisteria.jpg';
import image3 from '../logo.svg';

const FriendsList = () => {
  const sampleFriends = [
    {
      name: 'Chris Long',
      image: image1,
    },
    {
      name: 'Dave \'Stallion\' Higginbottoms',
      image: image2,
    },
    {
      name: 'Wysting Manchester III',
      image: image3,
    },
    {
      name: 'Chris Long',
      image: image1,
    },
    {
      name: 'Dave \'Medallion\' Higginbottoms',
      image: image2,
    },
    {
      name: 'Wysting Manchester III',
      image: image3,
    },
    {
      name: 'Chris Long',
      image: image1,
    },
    {
      name: 'Dave \'Quintillion\' Higginbottoms',
      image: image2,
    },
    {
      name: 'Wysting Manchester III',
      image: image3,
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
