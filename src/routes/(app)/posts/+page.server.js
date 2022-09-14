import { error } from '@sveltejs/kit';
 
export async function load({ url }) {
  const posts = await fetch(`${url.origin}/api/posts`).then(res => res.json());

  if (posts) {
    return posts;
  }
 
  throw error(404, 'Error Fetching Posts');
}
