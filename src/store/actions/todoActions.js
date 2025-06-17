import { GET_TODOS, SET_LOADING, TODOS_ERROR } from "../types";

const HOST_URL = "http://localhost:5001"

export const getTodos = () => async (dispatch) => {

    try {

        dispatch(setLoading());

        setTimeout(async () => {
            const getEndpoint = "/todos";
    
            const response = await fetch(HOST_URL+getEndpoint);
            const jsonRes = await response.json();
    
            dispatch({
                type: GET_TODOS,
                payload: jsonRes
            });

        }, 3000);

    } catch (error) {
        dispatch({
            type: TODOS_ERROR,
            payload: error
        });
    }
}

export const setLoading = () => async (dispatch) => {

    try {
        dispatch({
            type: SET_LOADING
        });
    } catch (error) {
        console.log(`setLoading error message from todoactions: ${error}`);
        dispatch({
            type: TODOS_ERROR,
            payload: error
        });
    }

}