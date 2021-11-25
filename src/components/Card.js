import React from 'react';
import '../containers/App.css';

const card = ({ name, email, id }) => {
  return (
    <div className='tc bg-light-green dib brd pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200s200`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default card;
