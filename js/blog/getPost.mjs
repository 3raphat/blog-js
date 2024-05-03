export async function getAllPostsByName(name, tag) {
  try {
    const response = await fetch(
      `https://v2.api.noroff.dev/blog/posts/${name}${tag ? `?_tag=${tag}` : ""}`
    )
    const posts = await response.json()

    return posts.data
  } catch (error) {
    console.error(error)
  }
}

export async function getPostById(name, id) {
  try {
    const response = await fetch(
      `https://v2.api.noroff.dev/blog/posts/${name}/${id}`
    )
    const post = await response.json()

    return post.data
  } catch (error) {
    console.error(error)
  }
}
