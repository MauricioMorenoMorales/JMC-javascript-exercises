import { ajax } from '../helpers/ajax.js';
import api from '../helpers/wp_api.js';
import { Post } from './Post.js';
import { PostCard } from './PostCard.js';
import { SearchCard } from './SearchCard.js';

export const Router = async function () {
	const { hash } = location;

	const $main = document.getElementById('main');

	$main.innerHTML = null;

	if (!hash || hash === '#/') {
		await ajax({
			url: api.POSTS,
			successCallback: main => {
				let html = '';
				main.forEach(post => (html += PostCard(post)));
				document.querySelector('.loader').style.display = 'none';
				$main.innerHTML = html;
			},
		});
	} else if (hash.includes('#/search')) {
		const query = localStorage.getItem('wpSearch');
		if (!query) {
			document.querySelector('.loader').style.display = 'none';
			return false;
		}
		await ajax({
			url: `${api.SEARCH}${query}`,
			successCallback: search => {
				console.log(search);
				let html = '';
				$main.innerHTML = html;
				if (search.length === 0) {
					html = `
						<p class="error">
							No existen resultados de búsqueda para el termino
							<mark>${query}</mark>
						</p>
					`;
					localStorage.clear();
				} else {
					search.forEach(post => (html += SearchCard(post)));
				}
				$main.innerHTML = html;
			},
		});
	} else if (hash === '#/contacto') {
		$main.innerHTML = `<h2>Sección de Contacto</h2>`;
	} else {
		await ajax({
			url: `${api.POST}/${localStorage.getItem('wpPostId')}`,
			successCallback: post => {
				console.log(`${api.POST}/${localStorage.getItem('wpPostId')}`);
				console.log(post);
				$main.innerHTML = Post(post);
			},
		});
	}
	document.querySelector('.loader').style.display = 'none';
};
