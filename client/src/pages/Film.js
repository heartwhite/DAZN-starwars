import React from 'react';
import { useParams } from 'react-router-dom';

import FilmDetails from '../components/FilmDetails';
import BackButton from '../components/BackButton';

const Film = () => {
  const { id } = useParams();
  return (
    <div>
      <BackButton />
      <FilmDetails id={id} />
    </div>
  );
};

export default Film;
