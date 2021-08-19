import { Menu } from './Menu.js';
import { SearchForm } from './SearchForm.js';
import { Title } from './Title.js';

export const Header = props => {
	const $header = document.createElement('header');
	$header.classList.add('header');
	$header.appendChild(Title());
	$header.appendChild(Menu());
	$header.appendChild(SearchForm());
	return $header;
};
