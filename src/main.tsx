import React from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';
import { Link, useLocation } from "react-router-dom";
import Header from './header';
import { motion } from "framer-motion"


function Main() {
    const location = useLocation();

  return (
    <motion.div
        initial={{ y: "-100%"}}
        animate={{ y: 0}}
        exit={{ y: "-100%"}}
        transition={{ ease: "easeOut", duration: 0.5 }}
    >
        <Header title="laure flesch"></Header>
        <div className="main center">
            <div className="nav column-center">
                <Link style={{ textDecoration: 'none' }} to={"/"}>
                <div className="navE">
                    <p className="nav-text home-text">
                        Navigation
                    </p>
                </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={"/portfolio"}>
                <div className="navE">
                    <p className="nav-text">
                        Galerie
                    </p>
                </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={"/about"}>
                <div className="navE">
                    <p className="nav-text">
                        Propos
                    </p>
                </div>
                </Link>
            </div>
            {/* <div className="home center">
                <p className="home-text">
                Laure Flesch
                </p>
            </div> */}
        </div>
    </motion.div>
  );
}

export default Main;
