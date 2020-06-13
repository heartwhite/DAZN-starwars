import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

export const ButtonText = styled.p`
  color: black;
  text-align: left;
  margin-bottom: 35px;
`;
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
