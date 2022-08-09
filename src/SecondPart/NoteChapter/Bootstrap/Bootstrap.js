import React from 'react';
import { Link } from 'react-router-dom';

const Bootstrap = () => {
    return (
      <div>
        <Link to="/drawer/BBlog" className="btn">
          Blog
        </Link>
        <Link to="/drawer/BUi" className="btn m-5">
          Code
        </Link>
      </div>
    );
};

export default Bootstrap;