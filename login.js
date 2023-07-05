function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// Perform validation
	if (username == "" || password == "") {
		alert("Please enter your username and password");
	} else if (username != "admin" || password != "password") {
		alert("Invalid username or password");
	} else {
		alert("Login successful");
	}
}
