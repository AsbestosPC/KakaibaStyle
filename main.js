let darkModeEnbaled = false

function darkMode() {
	let x = document.getElementsByClassName("light")

	while(x.length > 0) {
		x[0].className = "dark";  
	}
}

function lightMode() {
	x = document.getElementsByClassName("dark")

	while(x.length > 0) {
		x[0].className = "light";  
	}
}

function changeDarkMode() {
	if (localStorage.getItem("dark-mode") == "true") {
		darkModeEnbaled = true
	}
	darkModeEnbaled = !darkModeEnbaled

	if (darkModeEnbaled) {
		// document.body.classList.remove("light")
		// document.body.classList.add("dark")

		// document.getElementById("header").classList.remove("light");
		// document.getElementById("header").classList.add("dark");]

		// document.querySelectorAll('.light').forEach(e => e.classList.replace('light', 'dark'))
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
	}
	else {
		lightMode()
	}
}