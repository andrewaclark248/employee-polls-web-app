import { LOGIN_PAGE, HOME_PAGE, NEW_POLL_PAGE } from '../actions/changePageAction';


const initialState = {
    currentPage: LOGIN_PAGE
}

export const changePage = (state = initialState, action) => {
	var x = null;
	if (action.type == LOGIN_PAGE) {
		x =  {
			...state,
			currentPage: LOGIN_PAGE
		}
	}else if (action.type == HOME_PAGE) {
		x =  {
			...state,
			currentPage: HOME_PAGE
		}
	} else if (action.type == NEW_POLL_PAGE) {
		x =  {
			...state,
			currentPage: NEW_POLL_PAGE
		}
	} else {
		x = state;
	}


    return x;
}

	/****	switch(action.type){
		case LOGIN_PAGE: 
			x =  {
				...state,
				currentPage: LOGIN_PAGE
			}
        case HOME_PAGE: 
			x =  {
				...state,
				currentPage: HOME_PAGE
			}
		default:x = state
	}**/