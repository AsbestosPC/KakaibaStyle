let darkMode = false

function changeDarkMode() {
	darkMode = !darkMode

	if (darkMode) {
		// document.body.classList.remove("light")
		// document.body.classList.add("dark")

		// document.getElementById("header").classList.remove("light");
		// document.getElementById("header").classList.add("dark");]

		document.querySelectorAll('.light').forEach(e => e.classList.replace('light', 'dark'))
	}
	else {
		document.body.classList.remove("dark")
		document.body.classList.add("light")

		document.getElementById("header").classList.remove("dark");
		document.getElementById("header").classList.add("light");
	}
}