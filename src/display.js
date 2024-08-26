import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Display({ val }) {
  return (
    <input
      type="text"
      value={val}
      readOnly
      className="form-control mb-3 text-right display-input"
    />
  );
}

export default Display;

