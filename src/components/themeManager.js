const defaultTheme = {
  label: 'ndo',
  value: 0,
  mainColor: '#f5f5f5',
  accentColor: '#ff92d0',
  backgroundColor: '#14081f',
}

const setTheme = theme => {
  localStorage.setItem('theme', theme)
  window.location.reload()
}

const resetTheme = () => {
  localStorage.removeItem('theme')
}

const getTheme = () => {
  let selectedTheme = defaultTheme

  if (
    localStorage.getItem('theme') &&
    typeof localStorage.getItem('theme') === 'object' &&
    localStorage.getItem('theme') !== undefined
  ) {
    selectedTheme = JSON.parse(localStorage.getItem('theme'))
  }

  return selectedTheme
}

const selectedTheme = getTheme()

export { setTheme, resetTheme }

export default selectedTheme
