// View
//
// Create an input tag for the user ID.
// Create an input tag for the password.
// Create a button tag that sends the user ID and password to the Javascript code.
// Create a p tag for the page's feedback to the user (whether the user's credentials are valid or invalid and any related error messages).
// Controller
//
// Create a click listener that takes the user ID and password from the input tags and displays them in an alert.
// Reuse the code from your previous User ID and Password Validation challenge to compare the user's input to the criteria for a valid user id and password.
// Show an error message in the p tag if the credentials are not valid and why. Use the jQuery functions .append(..) or .text(..).
// Clear unacceptable values from the input fields after an attempted submission. Use the jQuery function .val(..).
// Disable the button after a certain number of log in attempts have been made. Use the jQuery function .off(..).
$(document).ready(function() {
	var attempts = 0
	$("#logIn").click(function() {
	$("#errorMessage").text(function login()  {
		attempts++
	  function pwCheck()  {
	    var pw = $("#passWord").val();
	    const constraint = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).{6,15}$/;
			if (attempts === 7) {
				$("#logIn").off()
			} else if (pw.match(constraint)) {
				alert("true")
				// return true;
	    } else {
				$("#passWord").val("")
				$("#error").text("Password Invalid")
	      // return false;
				// return "Error Message"
	    }
	  }
	  function userCheck()  {
	    var user = $("#userName").val();
	    const unConstraint = /^(?!.*\d)(?=.*[a-zA-Z])(?!.*[!@#$%^&*])(?!.*\s).{6,15}$/;
			if (attempts === 7) {
				$("#logIn").off()
			}
			else if (user.match(unConstraint)) {
	      return true;
	    } else {
				$("#userName").val("")
	      $("#errorMessage").text("Username Invalid")
	    }
	  }
	  if (userCheck() === true && pwCheck() === true) {
	    alert("Login Successful")
	  // } else {
	    // alert("Login Failed. Please try again.")
	  }
	})

})
})
