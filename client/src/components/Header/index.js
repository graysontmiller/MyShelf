import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="headerCustom mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center text-light">
        <Link to="/">
          <h1>MyShelf</h1>
        </Link>

        <nav className="text-center text-light">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">My Profile</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
