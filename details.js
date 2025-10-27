const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

const URL = 'https://670fe587a85f4164ef2c6100.mockapi.io/alimente';

fetch(`${URL}/${id}`)
	.then((response) => response.json())
	.then(
		(product) =>
			(document.querySelector('.details-container').innerHTML = product.details)
	);
