import {
  FETCH_SETS_START,
  FETCH_SETS_SUCCESS,
  FETCH_SETS_FAILURE,
} from "../actions";

export const initialState = {
  pokemonSets: [],
  pokemonCards: [],
  isLoading: false,
};

interface State {
  pokemonSets: {}[] | any;
  pokemonCards: any;
  isLoading: boolean;
}

interface Action {
  type: string;
  payload: {};
}

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_SETS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SETS_SUCCESS:
      return {
        ...state,
        pokemonSets: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
