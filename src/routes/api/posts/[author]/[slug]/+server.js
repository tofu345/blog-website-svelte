import { error, json } from '@sveltejs/kit';

export async function GET({ url, params }) {
  const posts = await fetch(`http://localhost:8000/api/posts/${params.author}/${params.slug}`)
    .then(res => res.json());

  if (posts) {
    return new json(posts);
  }
 
  throw error(404, 'Error Fetching Posts');
}


export async function DELETE({url, params}) {
  const fetchData = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  // const data = 
  const res = await fetch(`http://localhost:8000/api/posts/${params.author}/${params.slug}`, fetchData).then(
    (res) => res.json()
  ).catch(err => {
    try {
      err.json()
    } catch (error) {
      throw error(500, error)
    }
  })

  return new json(res)
}
