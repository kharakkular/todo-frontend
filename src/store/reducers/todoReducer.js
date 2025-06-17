import { ADD_TODO, GET_TODOS, SET_LOADING } from "../types"

const initialState = {
    todos: null,
    error: null,
    loading: false
}

export default (state = initialState, action) => {

    switch(action.type) {
        case GET_TODOS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            };
        case ADD_TODO:
            return {
                ...state,
                todos: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return {
                ...state
            };
    }
}