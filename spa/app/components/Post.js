export const Post = ({ title, content, date }) => `
	<section class="post-page">
		<aside>
			<h2>${title.rendered}</h2>
			<time datetime="${date}">${new Date(date).toLocaleString()}</time>
		</aside>
		<hr/>
		<article>${content.rendered}</article>
	</section>`;
