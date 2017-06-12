// var compNum = Math.floor(Math.random()* 100) +1
// console.log(compNum)
// var attemps = 0
// var remainingAttemps = 7
// var userName = prompt("Please Enter Your Name")
// function hiLo() {
//   attemps++
//   console.log(attemps)
//   let value = document.getElementById('num-input').value
//   if(attemps === 7) {
//     document.getElementById("display").innerHTML = "You Ran Out Of Tries"
//     document.getElementById('num-input').value = ""
//   } else if(isNaN(value)) {
//     document.getElementById("display").innerHTML = "Please Enter A Valid Number"
//     document.getElementById('num-input').value = ""
//   } else if (value < compNum) {
//     document.getElementById("display").innerHTML = "Your Number is: Too Low"
//     document.getElementById('num-input').value = ""
//   } else if (value> compNum){
//     document.getElementById("display").innerHTML = "Your Number is: Too High"
//     document.getElementById('num-input').value = ""
//   } else if(value == compNum) {
//     document.getElementById("display").innerHTML = "You Guessed Correctly " + userName
//     document.getElementById('num-input').value = ""
//   }
// }

// $(document).ready(function() {
//
// 	alert("connected");
//
// });

$(document).ready(function() {
	// var userName = prompt("Please Enter Your Name")
	var compNum = Math.floor(Math.random()* 100) +1;
	console.log(compNum)
	var attemps = 0;
	var remainingAttemps = 7;

	$("#result").click(function(){
		alert($("#num-input").val());
		$("#display").text(function hiLo() {
			  attemps++
			  console.log(attemps)
			  var value = $("#num-input").val();

			  if(attemps === 7) {
					$("#num-input").hide()
					$("#result").hide()
					// $("#num-input").val("")
			    return "You Ran Out Of Tries"
				} else if(attemps === 5 || attemps === 6) {
					alert("HEy");
					$("#answers").append(value + ", ")
					$("#num-input").val("")
					$("h2").css({"background": "red"})
			  } else if(isNaN(value)) {
					$("#answers").append(value + ", ")
					$("#num-input").val("")
			    return "Please Enter A Valid Number"
			  } else if (value < compNum) {
					$("#answers").append(value + ", ")
					$("#num-input").val("")
			    return "Your Number is: Too Low"
			  } else if (value> compNum){
					$("#answers").append(value + ", ")
					$("#num-input").val("")
			    return "Your Number is: Too High"
			  } else if(value == compNum) {
					$("#num-input").hide()
					$("#result").hide()
					// $("#num-input").val("")
			    return "You Guessed Correctly "
				}
			})
	})
});
