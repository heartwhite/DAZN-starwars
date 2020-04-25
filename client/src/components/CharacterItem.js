import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';

import avatar from '../static/profile-avatar.png';

const CharacterItem = ({ character, small }) => {
  const { name, id } = character;

  return (
    <Item className='character-item'>
      <Item.Image size='mini' src={avatar} />
      <Item.Content verticalAlign='middle'>
        <p>
          <Link to={`/character/${id}`}>{name}</Link>
        </p>
      </Item.Content>
    </Item>
  );
};

export default CharacterItem;
