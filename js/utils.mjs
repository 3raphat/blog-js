function debounce(func, delay) {
  let timeoutId
  return () => {
    const context = this
    const args = arguments
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(context, args), delay)
  }
}

export { debounce }
