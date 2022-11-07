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

		darkMode();
		console.log("Changed to dark")
	}
	else {
		lightMode()
		console.log("Changed to light")
	}

	localStorage.setItem("dark-mode", darkModeEnbaled);
	console.log("Set to: " + localStorage.getItem("dark-mode"))
}

function checkDarkMode() {
	console.log(localStorage.getItem("dark-mode"))
	if (localStorage.getItem("dark-mode") == "true") {
		darkMode()
		darkModeEnbaled = true
	}
	else {
		lightMode()
	}
}