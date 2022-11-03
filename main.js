let darkModeEnbaled = false

function darkMode() {
	// let elements = document.getElementsByClassName("light")

	// for(var i = 0; i < elements.length; i++)
	// {
	// 	console.log(i);
    // 	elements[i].classList.add('dark');
    // 	elements[i].classList.remove('light');
	// }

	let elements = document.querySelectorAll('.light')
	elements.forEach( x => {
		x.classList.add('dark');
		x.classList.remove('light');
	})
}

function lightMode() {
	// let elements = document.getElementsByClassName("dark")

	// for(var i = 0; i < elements.length; i++)
	// {
	// 	console.log(i)
    // 	elements[i].classList.add('light');
    // 	elements[i].classList.remove('dark');
	// }

	let elements = document.querySelectorAll('.dark')
	elements.forEach( x => {
		x.classList.add('light');
		x.classList.remove('dark');
	})
}

function changeDarkMode() {
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
		darkModeEnbaled = true
	}
	else {
		lightMode()
	}
}