document
  .getElementById("register-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault()

    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    try {
      const response = await fetch("https://v2.api.noroff.dev/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: username, email, password }),
      })
      const data = await response.json()
      console.log(data)

      if (data.errors) {
        alert(data.errors.map((error) => error.message).join(", "))
        console.error(data.errors.map((error) => error.message).join(", "))
        return
      }

      if (response.ok) {
        alert("Registered successfully!")
        window.location.href = "/account/login.html"
      }
    } catch (error) {
      console.error(error)
    }
  })
