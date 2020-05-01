import React from 'react';
import { useParams } from 'react-router-dom';

import CharacterCard from '../components/CharacterCard';
import BackButton from '../components/BackButton';

const Character = () => {
  const { id } = useParams();
  return (
    <>
      <BackButton />
      <CharacterCard characterId={id} />
    </>
  );
};

export default Character;
