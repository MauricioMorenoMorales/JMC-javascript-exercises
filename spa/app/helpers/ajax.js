export const ajax = props => {
	let { url, successCallback } = props;

	fetch(url)
		.then(response =>
			response.ok ? response.json() : Promise.reject(response),
		)
		.then(json => successCallback(json))
		.catch(catchedError => {
			let message =
				catchedError.statusText ||
				'Ocurrió un error dentro de el fetch en el archivo ajax.js';
			document.getElementById('root').innerHTML = `
				<div class="error">
					<p>Error ${catchedError.status}: ${message}</p>
				</div>
			`;
			console.log(catchedError);
		});
};
