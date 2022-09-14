import { error, json } from '@sveltejs/kit';

export async function GET({ url }) {
  const posts = await fetch('http://localhost:8000/api/posts').then(res => res.json());

  if (posts) {
    return new json(posts);
  }
 
  throw error(404, 'Error Fetching Posts');
}


export async function POST({request}) {
  const body = await request.json();

  const data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: body.title || '',
      content: body.content || '',
      author: "tofu"
    })
  }

  const res = await fetch('http://localhost:8000/api/posts/', data)
    .then(res => res.json())
    .catch(res => {
      try {
        res.json();
      } catch (err) {
        throw error(500, err);
      }
    })
    

  return new json(res)
}
