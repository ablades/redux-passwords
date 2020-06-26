// String constants exported so that they can be shared throughout code
export const ADD_PASSWORD = "ADD_PASSWORD"
export const EDIT_PASSWORD = "EDIT_PASSWORD"
export const DELETE_PASSWORD = "DELETE_PASSWORD"

// action -> dispatch(reducer) -> state -> View

// action creators simple functions that return action objects
// payload is js object with properties
export const addPassword = (name, password) => {
    return {
        type: ADD_PASSWORD,
        payload: { name, password }
    }
}

export const deletePassword = (index) => {
    return {
        type: DELETE_PASSWORD,
        payload: { index }
    }
}

export const editPassword = (index, name, password) => {
    return {
        type: EDIT_PASSWORD,
        payload: { index, name, password }
    }
}