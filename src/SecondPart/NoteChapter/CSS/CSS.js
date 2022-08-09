import React from 'react';
import { Link } from 'react-router-dom';

const CSS = () => {
    return (
      <div className="flex flex-nowrap items-center justify-center  m-20">
        <Link to="/drawer/blog" className="btn">
          Blog
        </Link>
        <Link to="/drawer/UI" className="btn m-5">
          Suju Ui
        </Link>
      </div>
    );
};

export default CSS;