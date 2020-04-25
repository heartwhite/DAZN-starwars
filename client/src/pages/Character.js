import React from 'react';
import { useParams } from 'react-router-dom';

import CharacterCard from '../components/CharacterCard';
import BackButton from '../components/BackButton';

const Character = () => {
  const { id } = useParams();
  return (
    <div className='container'>
      <BackButton />
      <CharacterCard characterId={id} />
    </div>
  );
};

export default Character;
