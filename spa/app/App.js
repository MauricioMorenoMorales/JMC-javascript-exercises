import api from './helpers/wp_api.js';
import { ajax } from './helpers/ajax.js';
import { Loader } from './components/Loader.js';
import { Header } from './components/Header.js';
import { Main } from './components/Main.js';
import { PostCard } from './components/PostCard.js';
import { Router } from './components/Router.js';

export const App = function () {
	const $root = document.getElementById('root');

	$root.innerHTML = null;
	$root.appendChild(Header());
	$root.appendChild(Main());
	$root.appendChild(Loader());
	Router();
};
