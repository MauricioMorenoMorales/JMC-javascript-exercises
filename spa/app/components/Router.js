import { ajax } from '../helpers/ajax.js';
import api from '../helpers/wp_api.js';
import { PostCard } from './PostCard.js';

export const Router = function () {
	const { hash } = location;

	const $posts = document.getElementById('posts');

	$posts.innerHTML = null;

	if (!hash || hash === '#/') {
		ajax({
			url: api.POSTS,
			successCallback: posts => {
				console.log(posts);
				let html = '';
				posts.forEach(post => (html += PostCard(post)));
				document.querySelector('.loader').style.display = 'none';
				$posts.innerHTML = html;
			},
		});
	} else if (hash.includes('#/search')) {
		$posts.innerHTML = `<h2>Sección del Buscador</h2>`;
	} else if (hash === '#/contacto') {
		$posts.innerHTML = `<h2>Sección de Contacto</h2>`;
	} else {
		$posts.innerHTML = `<h2>Aquí cargará el contenido de el Post previamente seleccionado</h2>`;
	}
};
