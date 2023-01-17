import { initialUsers } from './../../initialUsers.js'

const initialState = {
	allUsers: initialUsers
}

export const changeUser = (state = initialState, action) => {

    if (action.type == "") {
        //return state
    }
    return state
}

