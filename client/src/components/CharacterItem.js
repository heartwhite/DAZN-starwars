import React from 'react';
import { Link } from 'react-router-dom';

import avatar from '../static/profile-avatar.png';
const CharacterItem = ({ character }) => {
  const { name, id } = character;
  return (
    <div className='character-item'>
      <img src={avatar} alt='character-avatar' height='30px' width='23px' />
      <Link to={`/character/${id}`}>{name}</Link>
    </div>
  );
};

export default CharacterItem;
