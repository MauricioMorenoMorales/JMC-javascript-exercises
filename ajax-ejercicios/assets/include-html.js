document.addEventListener('DOMContentLoaded', event => {
	const includeHTML = function (element, url) {
		const xhr = new XMLHttpRequest();

		xhr.addEventListener('readystatechange', xhrEvent => {
			if (xhr.readyState !== 4) return;
			if (xhr.status >= 200 && xhr.status < 300) {
				element.outerHTML = xhr.responseText;
			} else {
				const message =
					xhr.statusText ||
					'Error al cargar el archivo, verifica que estés haciendo la petición http o https';
				element.outerHTML = `<div><p> Error ${xhr.status}: ${message} </p></div>`;
			}
		});
		xhr.open('GET', url);
		xhr.setRequestHeader('Content-Type', 'text/html; charset=utf-8');
		xhr.send();
	};
	document
		.querySelectorAll('[data-include]')
		.forEach(element =>
			includeHTML(element, element.getAttribute('data-include')),
		);
});
