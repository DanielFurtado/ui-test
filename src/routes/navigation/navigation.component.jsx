import { Fragment } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { ReactComponent as MotorwayLogo } from '../../assets/motorway-logo.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <header className='navigation'>
        <nav className='nav-container'>
          <NavLink className='logo-container' to='/'>
            <MotorwayLogo className='logo' />
          </NavLink>
            <ul className='nav-links-container'>
              <li>
                <NavLink to='/' className='nav-link'>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to='/sign-up' className='nav-link' >
                  Sign up
                </NavLink>
              </li>
            </ul>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
