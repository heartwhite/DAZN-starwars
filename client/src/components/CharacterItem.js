import React from 'react';
import avatar from '../static/profile-avatar.png';
import './componentStyles/characters.css';
const CharacterItem = ({ character, setCharacterId }) => {
  return (
    <div className='character-item' onClick={() => setCharacterId(character.id)}>
      <img src={avatar} alt='' height='30px' width='23px' />
      {character.name}
    </div>
  );
};

export default CharacterItem;
