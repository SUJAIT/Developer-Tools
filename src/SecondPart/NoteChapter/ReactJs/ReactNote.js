import React from 'react';
import { Link } from 'react-router-dom';

const ReactNote = () => {
    return (
      <div>
        <Link to="/drawer/RBlog" className="btn">
          Blog
        </Link>
        <Link to="/drawer/RCode" className="btn m-5">
          Code
        </Link>
      </div>
    );
};

export default ReactNote;<h1>Reactjs</h1>