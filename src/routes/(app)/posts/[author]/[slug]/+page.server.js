import { error } from '@sveltejs/kit';

export async function load({ params, url }) {
  const post = await fetch(`${url.origin}/api/posts/${params.author}/${params.slug}`).then(res => res.json());

  if (post) {
    return post;
  }

  throw error(404, 'Error Fetching Posts');
}
