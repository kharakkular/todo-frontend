import { ADD_TODO, DELETE_TODO, GET_TODOS, SET_LOADING, TODOS_ERROR, UPDATE_TODO } from "../types"

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
            case UPDATE_TODO:
            const allTodos = [...state.todos];
            let updatedTodoIndex = allTodos.findIndex(todo => todo.id === action.payload.id);
            allTodos[updatedTodoIndex] = {...action.payload};
            console.log("++++++++++Updated Todo value from UPDATE_TODO is: ", {allTodos});
            return {
                ...state,
                loading: false,
                todos: [...allTodos]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
                loading: false
            }
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