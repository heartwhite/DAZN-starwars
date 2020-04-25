import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const BackButton = () => {
  return (
    <Link className='back-button' to='/'>
      <p className='size24 '>
        <Icon name='arrow left' color='blue' />
        Back to Actors search
      </p>
    </Link>
  );
};

export default BackButton;
