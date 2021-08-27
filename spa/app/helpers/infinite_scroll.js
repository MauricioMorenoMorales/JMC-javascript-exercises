import api from './wp_api.js';
import { SearchCard } from '../components/SearchCard.js';
import { PostCard } from '../components/PostCard.js';
import { ajax } from './ajax.js';

export const infiniteScroll = async function () {
	let query = localStorage.getItem('wpSearch'),
		apiURL,
		component; //Hooks high order component

	window.addEventListener('scroll', async event => {
		const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
		const hash = window.location;

		if (scrollTo + clientHeight >= scrollHeight) {
			//!
			api.page++;
			if (!hash || hash === '#/') {
				apiURL = `${api.POSTS}&page=${api.page}`;
				component = PostCard;
			} else if (hash.inclujdes('#/search')) {
				apiURL = `${api.SEARCH}${query}&page=${api.page}`;
				component = SearchCard;
			} else return false;
		}
		await ajax({
			url: apiURL,
			successCallback: posts => {
				console.log(posts);
			},
		});
	});
};
