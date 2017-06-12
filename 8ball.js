function eightBall()  {
  var a = ["Yup!", "Fuhgeddaboudit", "Maybe", "what would your mother do?",
  "what would an Australian do", "then do the opposite", "Go home","Get out!!!"]
  var p = Math.floor((Math.random()* 7))
  // This was our working one below
  return (a[p])
  }
//
// $(document).ready(){
//
//   $("button").click(function() {
//     alert("Connected");
//   })
//
// }

$(document).ready(function() {

  $("button").click(function() {
    $("#question").val("")
    $("#answer").text(function eightBall()  {
      var a = ["Yup!", "Fuhgeddaboudit", "Maybe", "what would your mother do?",
      "what would an Australian do", "then do the opposite", "Go home","Get out!!!"]
      var p = Math.floor((Math.random()* 7))
      // This was our working one below
      return "Here is your fortune: " + (a[p])
      });
    })



});
