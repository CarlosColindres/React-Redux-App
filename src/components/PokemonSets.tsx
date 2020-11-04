import React from 'react'
import {connect} from 'react-redux'

const PokemonSets: React.FC <DataTypes> = ({pokemonSets, isLoading}) => {
    console.log(pokemonSets, isLoading)
    return (
        <div className='card-grid'>
           
        </div>
    )
}

interface DataTypes {
    pokemonSets: [],
    pokemonCards: [],
    isLoading: boolean
}

const mapStateToProps = (state: DataTypes) => {
    return {
        pokemonSets: state.pokemonSets,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {})(PokemonSets)
