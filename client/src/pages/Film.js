import React from 'react';
import { useParams } from 'react-router-dom';

import FilmDetails from '../components/FilmDetails';
import BackButton from '../components/BackButton';

const Film = () => {
  const { id } = useParams();
  console.log('useParams(', useParams());
  return (
    <div className='container'>
      <BackButton />
      <FilmDetails id={id} />
    </div>
  );
};

export default Film;
