
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

export default function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <Link className="link" to="/">Home</Link>
      </ul>
    </div>
  )
}