let darkMode = false

function changeDarkMode() {
	darkMode = !darkMode

	if (darkMode) {
		document.body.classList.remove("light")
		document.body.classList.add("dark")
	}
	else {
		document.body.classList.remove("dark")
		document.body.classList.add("light")
	}
}