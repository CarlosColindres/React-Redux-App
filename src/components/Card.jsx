import React from "react";

const Card = ({ pokemonCard }) => {
  const {
    name,
    series,
    totalCards,
    logoUrl,
  } = pokemonCard;
  return (
    <div className="card">
      <div className="img">
        <img src={logoUrl} alt={name} />
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <h2>{series}</h2>
        <span>{totalCards}</span>
      </div>
    </div>
  );
};

export default Card;
