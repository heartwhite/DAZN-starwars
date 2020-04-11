import React from 'react';
import avatar from '../static/profile-avatar.png';
import './componentStyles/characters.css';
const CharacterItem = ({ character }) => {
  return (
    <div className='character-item'>
      <img src={avatar} alt='' height='30px' width='23px' />
      {character.name}
    </div>
  );
};

export default CharacterItem;
