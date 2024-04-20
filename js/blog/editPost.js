async function getPost(id) {
  try {
    const response = await fetch(
      `https://v2.api.noroff.dev/blog/posts/${localStorage.getItem(
        "name"
      )}/${id}`
    )
    const post = await response.json()

    return post
  } catch (error) {
    console.error(error)
  }
}

window.addEventListener("load", async () => {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get("id")

  if (!id) {
    alert(
      "Login แล้วไป Search ชื่อตัวเองในหน้า Blog Feed ก่อน แล้วค่อยกดปุ่ม Edit"
    )
    window.location.href = window.localStorage.getItem("name")
      ? "/index.html"
      : "/account/login.html"
    return
  }

  await getPost(id).then((post) => {
    document.getElementById("title").value = post.data.title
    document.getElementById("content").value = post.data.body
  })

  document
    .getElementById("editPostForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault()

      const title = document.getElementById("title").value
      const content = document.getElementById("content").value

      const editPostButton = document.getElementById("editPostButton")

      try {
        editPostButton.disabled = true
        editPostButton.innerHTML = "Editing post..."

        const response = await fetch(
          `https://v2.api.noroff.dev/blog/posts/${localStorage.getItem(
            "name"
          )}/${id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              title,
              body: content,
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
        const json = await response.json()
        console.log(json)

        if (response.ok) {
          alert("Post edited successfully!")
          window.location.href = "/index.html"
        }
      } catch (error) {
        console.error(error)
      } finally {
        editPostButton.disabled = false
        editPostButton.innerHTML = "Edit post"
      }
    })
})
