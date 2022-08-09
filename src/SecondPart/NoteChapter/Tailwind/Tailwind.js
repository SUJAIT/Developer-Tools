import React from 'react';
import { Link } from 'react-router-dom';

const Tailwind = () => {
    return (
      <div>
        <Link to="/drawer/TBlog" className="btn">
          Blog
        </Link>
        <Link to="/drawer/TUi" className="btn m-5">
          Code
        </Link>
      </div>
    );
};

export default Tailwind;