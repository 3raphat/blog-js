export async function getAllPostsByName(name, tag, limit, page) {
  try {
    const params = new URLSearchParams()
    if (tag) params.append("_tag", tag)
    if (limit) params.append("limit", limit)
    if (page) params.append("page", page)

    const response = await fetch(
      `https://v2.api.noroff.dev/blog/posts/${name}?${params.toString()}`
    )
    const posts = await response.json()

    return posts
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
