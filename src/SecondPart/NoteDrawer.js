import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NoteDrawer = () => {
    return (
      <div className="ml-10 mt-10">
        <div class="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            
            <Outlet></Outlet>

            <label
              for="my-drawer-2"
              class="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              <li>
                <Link to="/drawer/html">Html</Link>
              </li>
              <li>
                <Link to="/drawer/css">CSS</Link>
              </li>
              <li>
                <Link to="/drawer/JavaScript">JavaScript</Link>
              </li>
              <li>
                <Link to="/drawer/bootstrap">Bootstrap</Link>
              </li>
              <li>
                <Link to="/drawer/tailwind">Tailwind CSS</Link>
              </li>
              <li>
                <Link to="/drawer/reactjs">ReactJS</Link>
              </li>
              <li>
                <Link to="/drawer/nodejs">NodeJS</Link>
              </li>
              <li>
                <Link to="/drawer/mongodb">MongoDB</Link>
              </li>
              <li>
                <Link to="/drawer/firebase">Firebase</Link>
              </li>
              <li>
                <Link to="/drawer/deploy">Deploy</Link>
              </li>
              <li>
                <Link to="/drawer/short">Short-Cut Key And Websites</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default NoteDrawer;