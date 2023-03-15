import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import dessertImg from './assets/images/sweet-spot-logo.png';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="text- mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-dark" to="/">
            <img
              src={dessertImg}
              alt="The Sweet Spot Logo"
              style={{ width: '300px', height: 'auto', marginRight: '10px' }}
            />
          </Link>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" style={{ backgroundColor: '#F409AB', borderColor: '#09C2F4' }} to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" style={{ backgroundColor: '#09C2F4', borderColor: '#ffffff', color: '#000000' }} onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" style={{ backgroundColor: '#F409AB', borderColor: '#09C2F4' }} to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" style={{ backgroundColor: '#09C2F4', borderColor: '#ffffff', color: '#000000' }} to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
