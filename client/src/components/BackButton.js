import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Link to='/'>
      <div className='back-button'>Back to Search</div>
    </Link>
  );
};

export default BackButton;
