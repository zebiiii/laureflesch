import React from 'react';
import logo from './logo.svg';
import './App.css';
import './about.css'
import Header from './header';


function About() {
  return (
    <div className="">
        <Header title="menu"/>
        <div className="about column-center">
        <p className="about-text">Parce que « le bouche à oreilles » est le meilleur des médias, 
            la recommandation la plus fiable, celle qu’on ne remet pas en question, 
            j’aime l’idée de rester discrète sur les réseaux habituels et de laisser 
            mon numéro se chuchoter, comme une confidence</p>
        <p className="phone">33.782.233.433</p>
        </div>
    </div>
  );
}

export default About;
