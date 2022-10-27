import React from "react";
import FromHome from "../components/Home/FromHome";
import Footer from "../components/shared/Footer";
import "./styles/home.css";

const Home = () => {
  return (
    <div className="pokedex">
      <img
        className="pokedex__img"
        src="/images/home/pokedex.png"
        alt="pokedex"
      />
      <header className="pokedex__header">
        <h2 className="pokedex__subtitle">Hi Trainer!</h2>
        <p className="pokedex__text">Give me your name to see the pokedex </p>
      </header>
      <FromHome />
    </div>
  );
};

export default Home;
