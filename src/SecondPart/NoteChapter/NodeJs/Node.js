import React from 'react';
import { Link } from 'react-router-dom';

const Node = () => {
    return (
      <div>
        <Link to="/drawer/NBlog" className="btn">
          Blog
        </Link>
        <Link to="/drawer/NCode" className="btn m-5">
          Code
        </Link>
      </div>
    );
};

export default Node;