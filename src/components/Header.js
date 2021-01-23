import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as newsActions from '../actions/newsActions';

class Header extends Component {
	search = () => {
		this.props.getAll(
			`https://api.canillitapp.com/search/:${
				document.getElementById('form').value
			}`
		);
		document.getElementById('form').value = '';
	};
	render() {
		return (
			<nav className="header">
				<div className="header-link-container">
					<Link className="link" to="/">
						Home
					</Link>
					<Link className="link" to="/tecnologia">
						Tecnologia
					</Link>
					<Link className="link" to="/politica">
						Politica
					</Link>
					<Link className="link" to="/deportes">
						Deportes
					</Link>
					<Link className="link" to="/internacionales">
						Internacionales
					</Link>
					<Link className="link" to="/diseno">
						Diseño
					</Link>
				</div>
				<form className="search">
					<input id="form" type="text" placeholder="Buscar..." />
					<Link to="/buscar">
						<button onClick={this.search} className="search-button">
							<div className="border">
								<div className="search icon"></div>
							</div>
						</button>
					</Link>
				</form>
			</nav>
		);
	}
}

const mapStateToProps = (reducers) => {
	return reducers.newsReducer;
};

export default connect(mapStateToProps, newsActions)(Header);
