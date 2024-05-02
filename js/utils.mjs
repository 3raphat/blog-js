function debounce(func, delay) {
  let timeoutId
  return () => {
    const context = this
    const args = arguments
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(context, args), delay)
  }
}

function formatDistanceToNow(date) {
  const targetDate = new Date(date)
  const now = new Date()
  const distance = now - targetDate

  if (distance < 1000) {
    return "Just now"
  }

  const seconds = Math.floor(distance / 1000)
  if (seconds < 60) {
    return `${seconds} seconds ago`
  }

  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) {
    return `${minutes} minutes ago`
  }

  const hours = Math.floor(minutes / 60)

  if (hours < 24) {
    return `${hours} hours ago`
  }

  const days = Math.floor(hours / 24)
  if (days <= 1) {
    return `${days} day ago`
  }

  return targetDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export { debounce, formatDistanceToNow }
