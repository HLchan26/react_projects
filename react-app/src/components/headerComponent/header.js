import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>
            <div className="logo">
                LOGO
            </div>
            <nav>
                <ul>
                    <li className="first">
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/">PRODUCTS</Link>
                    </li>
                    <li className="last">
                        <Link to="/About">ABOUT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
}

export default Header;
