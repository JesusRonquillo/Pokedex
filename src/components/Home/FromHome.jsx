import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserNameGlobal } from "../../store/slices/userName.slice";
const FromHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch(setUserNameGlobal(e.target.submit.value.trim()));
    navigate("/pokedex");
  };

  return (
    <form onSubmit={submit} action="" className="pokedex__form">
      <input
        id="submit"
        type="text"
        className="pokedex__input"
        placeholder="Enter your name"
      />
      <button className="pokedex__btn">Catch them all</button>
    </form>
  );
};

export default FromHome;
