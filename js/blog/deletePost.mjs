export async function deletePostById(id) {
  try {
    await fetch(
      `https://v2.api.noroff.dev/blog/posts/${localStorage.getItem(
        "name"
      )}/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
  } catch (error) {
    console.error(error)
  }
}
