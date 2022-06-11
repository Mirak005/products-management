import React from 'react';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <main>
      <div>
        <h2>404 Not found</h2>
        <Button to='/'>Back Home</Button>
      </div>
    </main>
  );
};

export default NotFound;
