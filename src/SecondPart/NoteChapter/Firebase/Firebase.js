import React from 'react';
import { Link } from 'react-router-dom';

const Firebase = () => {
    return (
      <div>
        <Link to="/drawer/FBlog" className="btn">
          Blog
        </Link>
        <Link to="/drawer/FCode" className="btn m-5">
          Code
        </Link>
      </div>
    );
};

export default Firebase;