import React from 'react';
import { Link } from 'react-router-dom';

const Deploy = () => {
    return (
      <div>
        <Link to="/drawer/DBlog" className="btn">
          Blog
        </Link>
        <Link to="/drawer/DCode" className="btn m-5">
          Code
        </Link>
      </div>
    );
};

export default Deploy;