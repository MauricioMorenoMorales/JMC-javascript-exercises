import STRIPE_KEYS from './stripe-keys.js';

console.log(STRIPE_KEYS);

const $tacos = document.getElementById('tacos'),
	$template = document.getElementById('taco-template').content,
	$fragment = document.createDocumentFragment();

const fetchOptions = {
	headers: {
		Authorization: `Bearer ${STRIPE_KEYS.secret}`,
	},
};

let prices, products;

Promise.all([
	fetch('https://api.stripe.com/v1/products', fetchOptions),
	fetch('https://api.stripe.com/v1/prices', fetchOptions),
])
	.then(responses => Promise.all(responses.map(response => response.json())))
	.then(jsonResponse => {
		console.log(jsonResponse);
		products = jsonResponse[0].data;
		prices = jsonResponse[1].data;
		console.log('prices: ', prices, products);

		for (const element of prices) {
			const productData = products.filter(
				product => product.id === element.product,
			);
			console.log(productData);

			$template.querySelector('taco').setAttribute('data-price', element.id);
			const clone = document.importNode($template, true);
			$fragment.appendChild(clone);
		}
		$tacos.appendChild($fragment);
	})
	.catch(catchedError => {
		console.log(catchedError);
		const message =
			catchedError.statusText ||
			'Ocurrió un error al conectarse con la API de Stripe';
		$tacos.innerHTML = `<p>Error ${catchedError.status}: ${message}</p>`;
	});
