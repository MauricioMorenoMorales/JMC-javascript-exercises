import api from './helpers/wp_api.js';

export const App = function () {
	document.getElementById(
		'root',
	).innerHTML = `<h1>Bienvenidos a mi primer SPA con Vanilla.js</h1>`;

	console.log(api);
};
