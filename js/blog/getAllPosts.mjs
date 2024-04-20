export async function getAllPostsByName(name) {
  try {
    const response = await fetch(`https://v2.api.noroff.dev/blog/posts/${name}`)
    const posts = await response.json()

    return posts.data
  } catch (error) {
    console.error(error)
  }
}
