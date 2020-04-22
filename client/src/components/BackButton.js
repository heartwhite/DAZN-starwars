import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div>
      <Link to='/'>
        <div className='back-button'>Back to Search</div>
      </Link>
    </div>
  );
};

export default BackButton;
