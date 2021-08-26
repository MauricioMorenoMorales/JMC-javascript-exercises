export const SearchForm = props => {
	const $form = document.createElement('form'),
		$input = document.createElement('input');

	$form.classList.add('search-form');
	$input.name = 'search';
	$input.type = 'search';
	$input.placeholder = 'Buscar...';
	$input.autocomplete = 'off';
	$form.appendChild($input);

	if (location.hash.includes('#/search'))
		$input.value = localStorage.getItem('wpSearch');

	document.addEventListener('search', event => {
		if (!event.target.matches("input[type='search']")) return false;
		if (!event.target.value) localStorage.removeItem('wpSearch');
	});

	document.addEventListener('submit', event => {
		if (!event.target.matches('.search-form')) return false;
		event.preventDefault();
		localStorage.setItem('wpSearch', event.target.search.value);
		location.hash = `#/search?search=${event.target.search.value}`;
	});

	return $form;
};
