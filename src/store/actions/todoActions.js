import { type } from "@testing-library/user-event/dist/type";
import { ADD_TODO, DELETE_TODO, GET_TODOS, SET_LOADING, TODOS_ERROR } from "../types";

// const HOST_URL = "http://localhost:5001";

export const getTodos = () => async (dispatch) => {

    try {

        dispatch(setLoading());

        setTimeout(async () => {
            const getEndpoint = "/todos";
    
            const response = await fetch(getEndpoint);
            const jsonRes = await response.json();
    
            dispatch({
                type: GET_TODOS,
                payload: jsonRes
            });

        }, 3000);

    } catch (error) {
        console.log("Error obtained is: ", error.message);
        const errorObject = setError(error.message);
        dispatch(errorObject);
    }
}

export const addTodo = (todo) => async (dispatch) => {
    try {
        
        dispatch(setLoading());
        console.log("Value of todo from addTodo is: ", todo);
        const postEndpoint = "/todos";

        const response = await fetch(postEndpoint, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(todo)
        });
        const data = await response.json();
        console.log("Response from addTodo is: ", {res: data});
        dispatch({
            type: ADD_TODO,
            payload: data
        });
    } catch (error) {
        const errorObject = setError(error.message);
        dispatch(errorObject);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());

        console.log(`Id of the deleted todo is: ${id}`);

        const deleteEndpoint = `/todos/${id}`;
        const response = await fetch(deleteEndpoint, {
            method: "DELETE"
        });
        const data = await response.json();

        console.log("Response from deleteTodo is: ", {res: data});
        
        // dispatch({
        //     type: DELETE_TODO,
        //     payload: id
        // });
    } catch (error) {
        const errorObject = setError(error.message);
        dispatch(errorObject);
    }
}

export const setLoading = () => async (dispatch) => {

    try {
        dispatch({
            type: SET_LOADING
        });
    } catch (error) {
        console.log(`setLoading error message from todoactions: ${error}`);
        const errorObject = setError(error);
        dispatch(errorObject);
    }

}

const setError = (errorMessage) => {
    return {
        type: TODOS_ERROR,
        payload: errorMessage
    }
}