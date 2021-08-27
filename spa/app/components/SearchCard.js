export const SearchCard = ({ id, title, _links }) => `
	<article class="post-card">
		<h2>${title}</h2>
		<p>
			<a href="#/${_links.self[0].slug}" data-id="${id}">Ver Publicación</a>
		</p>
	</article>
`;
