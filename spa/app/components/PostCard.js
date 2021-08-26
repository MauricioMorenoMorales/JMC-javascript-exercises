export const PostCard = props => {
	const { date, id, title, slug, _embeded } = props;
	const formattedDate = new Date(date).toLocaleString();
	const urlPoster = _embeded
		? _embedded.featured_media_src_url
		: 'https://placeimg.com/200/200/any';

	document.addEventListener('click', event => {
		if (!event.target.matches('.post-card a')) return false;
		localStorage.setItem('wpPostId', event.target.dataset.id);
	});
	return `
		<div class="post-card">
			<img src="${urlPoster}" alt="${title.rendered}">
			<h2>${title.rendered}</h2>
			<p>
				<time datetime="${date}">${formattedDate}</time>
				<a href="#/${slug}" data-id="${id}">Ver Publicación</a>
			</p>
		</div>
	`;
};
