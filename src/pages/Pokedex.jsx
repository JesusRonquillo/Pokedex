import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardPoke from "../components/pokedex/CardPoke";
import InputSearch from "../components/pokedex/InputSearch";
import SelectByType from "../components/pokedex/SelectByType";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [typeSelected, setTypeSelected] = useState("All pokemons");

  useEffect(() => {
    if (typeSelected !== "All pokemons") {
      axios
        .get(typeSelected)
        .then((res) => {
          const result = res.data.pokemon.map((e) => e.pokemon);
          setPokemons(result);
        })
        .catch((err) => console.error(err));
    } else {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";
      axios
        .get(URL)
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    }
  }, [typeSelected]);
  const userName = useSelector((state) => state.userName);

  return (
    <div>
      <header>
        <h1>Pokedex</h1>
        <p>
          Welcome <span>{userName}</span>, here you can find your favorite
          pokemon
        </p>
      </header>
      <aside>
        <InputSearch />
      </aside>
      <SelectByType setTypeSelected={setTypeSelected} />
      <main>
        <div className="card-container">
          {pokemons?.map((pokemon) => (
            <CardPoke key={pokemon.url} url={pokemon.url} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pokedex;
