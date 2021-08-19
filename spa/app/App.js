import api from './helpers/wp_api.js';
import { ajax } from './helpers/ajax.js';

export const App = function () {
	document.getElementById(
		'root',
	).innerHTML = `<h1>Bienvenidos a mi primer SPA con Vanilla.js</h1>`;

	ajax({
		url: api.POSTS,
		successCallback: posts => {
			console.log(posts);
		},
	});
	ajax({
		url: api.CATEGORIES,
		successCallback: posts => console.log(posts),
	});
	console.log(api);
};
