import axios from 'axios'
export const FETCH_SETS_START = "FETCH_SETS_START";
export const FETCH_SETS_SUCCESS = "FETCH_SETS_SUCCESS";
export const FETCH_SETS_FAILURE = "FETCH_SETS_FAILURE";

const pokemonSetsUrl = 'https://api.pokemontcg.io/v1/sets'

export const fetchPokemonSets = () => {
    return (dispatch:({}) => {type:string}) => {
        dispatch({type: FETCH_SETS_START})
        axios.get(pokemonSetsUrl)
            .then(res => {
                dispatch({typ})
            })
    }
}

