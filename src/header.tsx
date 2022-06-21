import React from 'react';
import logo from './logo.svg';
import './App.css';
import './header.css'
import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <div className="header row-left-center">
        <Link style={{ textDecoration: 'none' }} to={"/"}>
            <p className="header-txt">{props.title}</p>
        </Link>
    </div>
  );
}

export default Header;
