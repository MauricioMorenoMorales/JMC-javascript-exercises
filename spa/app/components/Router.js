import { ajax } from '../helpers/ajax.js';
import api from '../helpers/wp_api.js';
import { Post } from './Post.js';
import { PostCard } from './PostCard.js';

export const Router = async function () {
	const { hash } = location;

	const $main = document.getElementById('main');

	$main.innerHTML = null;

	if (!hash || hash === '#/') {
		await ajax({
			url: api.POSTS,
			successCallback: main => {
				console.log(main);
				let html = '';
				main.forEach(post => (html += PostCard(post)));
				document.querySelector('.loader').style.display = 'none';
				$main.innerHTML = html;
			},
		});
	} else if (hash.includes('#/search')) {
		$main.innerHTML = `<h2>Sección del Buscador</h2>`;
	} else if (hash === '#/contacto') {
		$main.innerHTML = `<h2>Sección de Contacto</h2>`;
	} else {
		$main.innerHTML = `<h2>Aquí cargará el contenido de el Post previamente seleccionado</h2>`;
		// await ajax({
		// 	url: api.POSTS,
		// 	successCallback: main => {
		// 		console.log(main);
		// 		let html = '';
		// 		main.forEach(post => (html += PostCard(post)));
		// 		document.querySelector('.loader').style.display = 'none';
		// 		$main.innerHTML = html;
		// 	},
		// });
	}
	document.querySelector('.loader').style.display = 'none';
};
