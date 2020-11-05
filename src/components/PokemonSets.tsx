import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { fetchPokemonSets } from "../store/actions";

interface DataProps {
  pokemonSets: {}[];
  fetchPokemonSets: () => void;
  isLoading: boolean;
}

const PokemonSets: React.FC<DataProps> = ({
  pokemonSets,
  isLoading,
  fetchPokemonSets,
}) => {
  useEffect(() => {
    fetchPokemonSets();
    console.log(typeof pokemonSets);
  }, []);
  return (
    <div className="card-grid">
      {pokemonSets.map((card, idx) => (
        <Card key={idx} pokemonCard={card} />
      ))}
    </div>
  );
};

interface DataTypes {
  pokemonSets: {}[];
  pokemonCards: any;
  isLoading: boolean;
}

const mapStateToProps = (state: DataTypes) => {
  return {
    pokemonSets: state.pokemonSets,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchPokemonSets })(PokemonSets);
