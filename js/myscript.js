
function submitAnswer(){
	var total = 10;
	var score = 0;
	var i;

	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	var q6 = document.forms["quizForm"]["q6"].value;
	var q7 = document.forms["quizForm"]["q7"].value;
	var q8 = document.forms["quizForm"]["q8"].value;
	var q9 = document.forms["quizForm"]["q9"].value;
	var q10 = document.forms["quizForm"]["q10"].value;

	for(i=1;i<=total;i++){
		if (eval('q'+i) == null || eval('q'+i) == '') {
		alert('You missed question '+i);
		return false;
	}
  }

  var answers = ['b','a','d','b','d','b','c','a','b','a'];

  for(i=1;i<=total;i++){
  	if (eval('q'+i) == answers[i-1]) {
  	score++;
   }
 }

  var results = document.getElementById('results');
  results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span>'

  return false;
}