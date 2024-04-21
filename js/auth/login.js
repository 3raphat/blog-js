document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault()

  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  try {
    const response = await fetch("https://v2.api.noroff.dev/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json()
    console.log(data)

    if (data.errors) {
      alert(data.errors.map((error) => error.message).join(", "))
      console.error(data.errors.map((error) => error.message).join(", "))
    }

    if (data.data) {
      alert("Logged in successfully!")
      localStorage.setItem("accessToken", data.data.accessToken)
      localStorage.setItem("name", data.data.name)
      window.location.href = "/post/index.html"
    }
  } catch (error) {
    console.error(error)
  }
})
