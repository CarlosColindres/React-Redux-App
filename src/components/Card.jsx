import React from "react";

const Card = ({ pokemonCard }) => {
  const { name, releaseDate, totalCards, symbolUrl } = pokemonCard;
  return (
    <div className="card">
      <div className="img">
        <img src={symbolUrl} alt={name} />
      </div>
      <h2>{name}</h2>
      <span>{releaseDate}</span>
      <span>Total Cards: {totalCards}</span>
    </div>
  );
};

export default Card;
