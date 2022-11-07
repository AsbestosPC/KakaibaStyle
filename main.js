let darkModeEnbaled = false

// replace all instances of class "light" with "dark"
function darkMode() {
	let elements = document.querySelectorAll('.light')
	elements.forEach( x => {
		x.classList.add('dark');
		x.classList.remove('light');
	})
}
// replace all instances of class "dark" with "light"
function lightMode() {
	let elements = document.querySelectorAll('.dark')
	elements.forEach( x => {
		x.classList.add('light');
		x.classList.remove('dark');
	})
}

function changeDarkMode() {
	darkModeEnbaled = !darkModeEnbaled

	if (darkModeEnbaled) {
		darkMode();
	}
	else {
		lightMode()
	}

	localStorage.setItem("dark-mode", darkModeEnbaled);
}

function checkDarkMode() {
	if (localStorage.getItem("dark-mode") == "true") {
		darkMode()
		darkModeEnbaled = true
	}
	else {
		lightMode()
	}
}