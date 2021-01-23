import axios from 'axios';
import { GET_ALL, LOADING, ERROR, PUT_LINK, RESET } from '../types/newsTypes';

export const getAll = (link) => async (dispatch, getState) => {
	try {
		dispatch({
			type: LOADING,
		});
		dispatch({
			type: PUT_LINK,
			payload: link,
		});
		const { url } = getState().newsReducer;
		const response = await axios.get(url);
		const newsFilter = response.data.filter(
			(filter) => filter.img_url !== null
		);
		const news = newsFilter.slice(0, 10);
		news.length > 0
			? dispatch({
					type: GET_ALL,
					payload: news,
			  })
			: dispatch({
					type: ERROR,
					payload: 'Noticias no disponibles en esta categoria',
			  });
	} catch (error) {
		console.log('Error: ', error.message);
		dispatch({
			type: ERROR,
			payload: 'Noticias no disponibles en esta categoria',
		});
	}
};
