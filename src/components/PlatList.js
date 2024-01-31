import React from 'react';
import { Plats } from '../data/data';
import './platList.css';
import PlatCard from './PlatCard';

const PlatList = () => {
  return (
    <div className='platlist'>
      <ul className='platlist-items'>
        {Plats.map((Plats, index) => (
          <PlatCard Plats={Plats} index={index} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default PlatList;
