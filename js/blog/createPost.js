window.addEventListener("load", async () => {
  if (
    !window.localStorage.getItem("name") &&
    !window.localStorage.getItem("accessToken")
  ) {
    alert("Please login first")
    window.location.href = "/account/login.html"
  }
})

document
  .getElementById("create-post-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault()

    const title = document.getElementById("title").value
    const content = document.getElementById("content").value
    const imageURL = document.getElementById("image-url").value

    const createPostButton = document.getElementById("create-post-button")

    try {
      createPostButton.disabled = true
      createPostButton.innerHTML = `<span class="loading loading-spinner"></span> Creating post...`

      const payload = {
        title,
        body: content,
        media: {
          url: imageURL,
        },
      }

      if (!imageURL) {
        delete payload.media
      }

      const response = await fetch(
        `https://v2.api.noroff.dev/blog/posts/${localStorage.getItem("name")}`,
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      const json = await response.json()
      console.log(json)

      if (response.ok) {
        alert("Post created successfully!")
      }
    } catch (error) {
      console.error(error)
    } finally {
      createPostButton.disabled = false
      createPostButton.innerHTML = "Create post"
    }
  })
