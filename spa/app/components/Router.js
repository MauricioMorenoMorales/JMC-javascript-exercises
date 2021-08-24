import { ajax } from '../helpers/ajax.js';
import api from '../helpers/wp_api.js'
import { PostCard } from './PostCard.js';

export const Router = function () {


	ajax({
		url: api.POSTS,
		successCallback: posts => {
			console.log(posts);
			let html = '';
			posts.forEach(post => (html += PostCard(post)));
			document.querySelector('.loader').style.display = 'none';
			document.getElementById('posts').innerHTML = html;
		},
	});
};

