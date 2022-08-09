import React from 'react';
import { Link } from 'react-router-dom';

const JavaScript = () => {
    return (
      <div>
        <Link to="/drawer/JBlog" className="btn">
          Blog
        </Link>
        <Link to="/drawer/JCode" className="btn m-5">
          Code
        </Link>
      </div>
    );
};

export default JavaScript;