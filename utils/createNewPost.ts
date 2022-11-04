export default async function createNewPost(
  title,
  body,
  userId,
  posts,
  setUserPosts
): Promise<{ id }> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ title, body, userId }),
  });
  const data = await res.json();
  const newPosts = [...posts, { title: title, body: body, userId: userId, id: data.id }]
  setUserPosts(newPosts);
  return data;
}
