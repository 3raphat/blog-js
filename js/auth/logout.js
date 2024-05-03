const accessToken = localStorage.getItem("accessToken")
const username = localStorage.getItem("name")

if (accessToken && username) {
  const body = document.querySelector("body")
  body.onload = addLogoutButton

  function addLogoutButton() {
    const logoutButton = document.createElement("button")
    logoutButton.innerText = "Logout"
    logoutButton.className = "absolute top-10 right-10 btn btn-error btn-sm"

    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("name")
      window.location.href = "/account/login.html"
    })
    body.appendChild(logoutButton)
  }
}
