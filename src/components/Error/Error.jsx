import React from 'react';
import { Link } from 'react-router-dom';  

export default function Error() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Error</h2>
      <h1 className='font-extrabold text-7xl'>Add Electrothon 6.0</h1>
      <button>
        <Link to="/">Go back to home page</Link>
      </button>
    </div>
  );
}
