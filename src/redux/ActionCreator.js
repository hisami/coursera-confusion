import * as ActionTypes from './ActionTypes'

export const addComment = (name) => ({
    type: ActionTypes.ADD_DISH,
    payload: {
        name: name,
    }
})
