export const initialState = {
    pokemonSets: [],
    pokemonCards: [],
    isLoading: false
}

interface Action {
    type: string,
    payload: {}
}

export const reducer = (state = initialState , action:Action) => {
    switch(action.type) {
        default:
            return state
    }
}