import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { ButtonText } from './styledComponents';

const BackButton = () => {
  return (
    <ButtonText>
      <Link to='/'>
        <Icon name='arrow left' color='blue' />
        Back to Actors search
      </Link>
    </ButtonText>
  );
};

export default BackButton;
