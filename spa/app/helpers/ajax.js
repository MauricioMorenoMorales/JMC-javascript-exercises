export const ajax = async props => {
	let { url, successCallback } = props;

	await fetch(url)
		.then(response =>
			response.ok ? response.json() : Promise.reject(response),
		)
		.then(json => successCallback(json))
		.catch(catchedError => {
			let message =
				catchedError.statusText ||
				'Ocurrió un error dentro de el fetch en el archivo ajax.js';

			document.getElementById('main').innerHTML = `
				<div class="error">
					<p>Error ${catchedError.status}: ${message}</p>
				</div>
			`;
			document.querySelector('.loader').style.display = 'none';
			console.log(catchedError);
		});
};
