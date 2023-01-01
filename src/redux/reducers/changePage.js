import { LOGIN_PAGE, HOME_PAGE } from '../actions/changePageAction';


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