import STRIPE_KEYS from './stripe-keys.js';

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
		products = jsonResponse[0].data;
		prices = jsonResponse[1].data;

		for (const element of prices) {
			const productData = products.filter(
				product => product.id === element.product,
			);

			$template.querySelector('.taco').setAttribute('data-price', element.id);
			$template.querySelector('img').src = productData[0].images[0];
			$template.querySelector('img').alt = productData[0].name;
			$template.querySelector('figcaption').innerHTML = `
				${productData[0].name}
				<br>
				${element.unit_amount_decimal} ${element.currency}
			`;
			const clone = document.importNode($template, true);
			$fragment.appendChild(clone);
		}
		$tacos.appendChild($fragment);
	})
	.catch(catchedError => {
		const message =
			catchedError.statusText ||
			'Ocurrió un error al conectarse con la API de Stripe';
		$tacos.innerHTML = `<p>Error ${catchedError.status}: ${message}</p>`;
	});
