function login(event) {
	event.preventDefault();
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// Perform validation
	if (username == "" || password == "") {
		document.getElementById("login-message").innerHTML = '<div class="alert alert-warning" role="alert">Please enter your username and/or password!</div>';
	} else if (username != "admin" || password != "password") {
		document.getElementById("login-message").innerHTML = '<div class="alert alert-danger" role="alert">Invalid username or password!</div>';
	} else {
		document.getElementById("login-message").innerHTML = '<div class="alert alert-success" role="alert">Login Succesful!</div>';
	}
}
