/**
 *
 * Nav.react.js
 *
 * This component renders the navigation bar
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { logout } from '../actions/AppActions';
import LoadingButton from './LoadingButton.react';

class Nav extends Component {
  render() {
    // Render either the Log In and register buttons, or the logout button
    // based on the current authentication state.
    const navButtons = this.props.loggedIn ? (
        <div>
          <Link to="/dashboard" className="btn btn--dash btn--nav">대시보드</Link>
          {this.props.currentlySending ? (
            <LoadingButton className="btn--nav" />
          ) : (
            <a href="#" className="btn btn--login btn--nav" onClick={::this._logout}>로그아웃</a>
          )}
        </div>
      ) : (
        <div>
          <Link to="/register" className="btn btn--login btn--nav">회원가입</Link>
          <Link to="/login" className="btn btn--login btn--nav">로그인</Link>
        </div>
      );

    return(
      <div className="nav">
        <div className="nav__wrapper">
          <Link to="/" className="nav__logo-wrapper"><h1 className="nav__logo">Picasso's Online Judge</h1></Link>
          { navButtons }
        </div>
      </div>
    );
  }

  _logout() {
    this.props.dispatch(logout());
  }
}

Nav.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  currentlySending: React.PropTypes.bool.isRequired
}

export default Nav;
