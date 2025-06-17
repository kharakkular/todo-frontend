import { GET_TODOS, SET_LOADING, TODOS_ERROR } from "../types";

// const HOST_URL = "http://localhost:5001";

export const getTodos = () => async (dispatch) => {

    try {

        dispatch(setLoading());

        throw new Error("Errorrrrrrrrrrrrrrrrrrr");

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
        console.log("Error obtained is: ", error);
        const errorObject = setError(error);
        dispatch(errorObject);
    }
}

const addTodo = (todo) => async (dispatch) => {
    try {
        
        dispatch();
    } catch (error) {
        
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