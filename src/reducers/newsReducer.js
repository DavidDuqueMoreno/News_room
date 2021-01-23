import { GET_ALL, LOADING, ERROR, PUT_LINK } from '../types/newsTypes';

const INITIAL_STATE = {
	news: [],
	loading: false,
	error: '',
	url: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_ALL:
			return { ...state, news: action.payload, loading: false, error: '' };

		case LOADING:
			return { ...state, loading: true };

		case ERROR:
			return { ...state, error: action.payload, loading: false };

		case PUT_LINK:
			return { ...state, url: action.payload };

		default:
			return state;
	}
};
