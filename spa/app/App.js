import api from './helpers/wp_api.js';
import { ajax } from './helpers/ajax.js';
import { Loader } from './components/Loader.js';
import { Header } from './components/Header.js';

export const App = function () {
	const $root = document.getElementById('root');

	$root.appendChild(Loader());
	$root.appendChild(Header());
};
