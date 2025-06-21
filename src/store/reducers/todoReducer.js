import { ADD_TODO, GET_TODOS, SET_LOADING, TODOS_ERROR } from "../types"

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
                todos: [...state.todos, action.payload],
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case TODOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return {
                ...state
            };
    }
}