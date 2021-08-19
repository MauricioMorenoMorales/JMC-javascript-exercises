import api from './helpers/wp_api.js';
import { ajax } from './helpers/ajax.js';
import { Title } from './components/Title.js';
import { Loader } from './components/Loader.js';

export const App = function () {
	const $root = document.getElementById('root');

	$root.appendChild(Title());
	$root.appendChild(Loader());

	ajax({
		url: 'no-valida',
		successCallback: () => {},
	});
};
