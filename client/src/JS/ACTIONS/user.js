import axios from "axios"
import { CLEAR_ERRORS, CURRENT_USER, FAIL_USER, LOAD_USER, LOGOUT_USER, REGISTER_USER } from "../ACTIONTYPES/user"


export const register = (newUser) => async (dispatch) => {
    dispatch({type: LOAD_USER})
    try {
        let result = await axios.post("/api/user/register", newUser)
        dispatch({type: REGISTER_USER, payload: result.data})
    } catch (error) {
        dispatch({type: FAIL_USER, payload: error.response.data.errors})
    }
}

export const login = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER})
    try {
        let result = await axios.post('/api/user/login', user)
        dispatch({ type: REGISTER_USER, payload: result.data})
    } catch (error) {
        dispatch({type: FAIL_USER, payload: error.response.data.errors})
    }
}

export const current = () => async (dispatch) => {
    dispatch({ type: LOAD_USER })
    try {
        const config = {
            headers: {
                authorization : localStorage.getItem("token")
            }
        }
        let result = await axios.get("/api/user/current", config)
        dispatch({type: CURRENT_USER, payload: result.data})
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors})
    }
}

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT_USER })
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}