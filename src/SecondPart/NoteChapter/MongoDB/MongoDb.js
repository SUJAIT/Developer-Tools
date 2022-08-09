import React from 'react';
import { Link } from 'react-router-dom';

const MongoDb = () => {
    return (
      <div>
        <Link to="/drawer/MBlog" className="btn">
          Blog
        </Link>
        <Link to="/drawer/MCode" className="btn m-5">
          Code
        </Link>
      </div>
    );
};

export default MongoDb;