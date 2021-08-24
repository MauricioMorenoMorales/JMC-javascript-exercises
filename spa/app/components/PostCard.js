export const PostCard = props => {
	const { date, title, slug, _embeded } = props;
	const formattedDate = new Date(date).toLocaleString();
	const urlPoster = _embeded
		? _embedded['wp:featuredmedia'][0].source_url
		: 'https://placeimg.com/200/200/any';
	return `
		<div class="post-card">
			<img src="${urlPoster}" alt="${title.rendered}">
			<h2>${title.rendered}</h2>
			<p>
				<time datetime="${date}">${formattedDate}</time>
				<a href="#/${slug}">Ver Publicación</a>
			</p>
		</div>
	`;
};
