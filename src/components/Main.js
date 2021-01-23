import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as newsActions from '../actions/newsActions';

import Spinner from './General/Spinner';
import Fatal from './General/Fatal';

class Home extends Component {
	componentDidMount() {
		const { getAll } = this.props;
		var path = window.location.pathname;
		if (path === '/') {
			var time = new Date();
			var year = time.getFullYear();
			var month = time.getMonth() + 1;
			if (month < 10) {
				month = '0' + month;
			}
			var day = time.getDate();
			if (day < 10) {
				day = '0' + day;
			}
			var date = year + '-' + month + '-' + day;
			getAll(`https://api.canillitapp.com/latest/${date}`);
		}
		if (path === '/tecnologia') {
			getAll('https://api.canillitapp.com/news/category/3');
		}
		if (path === '/politica') {
			getAll('https://api.canillitapp.com/news/category/1');
		}
		if (path === '/deportes') {
			getAll('https://api.canillitapp.com/news/category/5');
		}
		if (path === '/internacionales') {
			getAll('https://api.canillitapp.com/news/category/2');
		}
		if (path === '/diseno') {
			getAll('https://api.canillitapp.com/news/category/6');
		}
	}

	render() {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };

		const News = () =>
			this.props.news.map((news) => (
				<div key={news.news_id} className="news-container">
					<div>
						<img
							className="news-image"
							src={news.img_url}
							alt="Imagen noticia"
						/>
					</div>
					<div className="news-info-container">
						<div className="news-title">{news.title}</div>
						<div className="news-source">{news.source_name}</div>
						<div className="news-date-button-container">
							<div className="news-date">
								{new Date(news.date).toLocaleDateString('es-CO', options)}
							</div>
							<a href={news.url}>
								<button className="news-button">VER MÁS</button>
							</a>
						</div>
					</div>
				</div>
			));
		const putContent = () => {
			const { loading, error, news } = this.props;
			console.log(news);
			if (loading) {
				return <Spinner />;
			}
			if (error || news === null) {
				return <Fatal message={this.props.error} />;
			}
			return News();
		};
		return <div className="all-news">{putContent()}</div>;
	}
}

const mapStateToProps = (reducers) => {
	return reducers.newsReducer;
};

export default connect(mapStateToProps, newsActions)(Home);
