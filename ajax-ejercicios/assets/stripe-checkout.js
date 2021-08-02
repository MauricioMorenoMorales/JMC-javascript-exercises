import STRIPE_KEYS from './stripe-keys.js';

console.log(STRIPE_KEYS);

const $tacos = document.getElementById('tacos'),
	$template = document.getElementById('taco-template').content,
	$fragment = document.createDocumentFragment();

fetch('https://api.stripe.com/v1/products', {
	headers: {
		Authorization: `Bearer ${STRIPE_KEYS.secret}`,
	},
})
	.then(response => response.json())
	.then(console.log);

fetch('https://api.stripe.com/v1/prices', {
	headers: {
		Authorization: `Bearer ${STRIPE_KEYS.secret}`,
	},
})
	.then(response => response.json())
	.then(console.log)
	.catch(console.log);
