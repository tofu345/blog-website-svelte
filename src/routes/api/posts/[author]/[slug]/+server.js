import { error, json } from '@sveltejs/kit';

export async function GET({ url, params }) {
  const posts = await fetch(`http://localhost:8000/api/posts/${params.author}/${params.slug}`)
    .then(res => res.json());

  if (posts) {
    return new json(posts);
  }
 
  throw error(404, 'Error Fetching Posts');
}
