function  checkAnswer() {
    var answer = document.querySelector('input[name="answer"]:checked').value

    //checking if the answer is correct
    if (answer === "Abuja") { 
        document.getElementById("result").innerHTML = "1.  correct!"
    } else {
        document.getElementById("result").innerHTML = "1."  + " " + "Incorrect, correct answer is Abuja!"
    }

    var answer = document.querySelector('input[name="answer-2"]:checked').value

    //checking if the answer is correct
    if (answer === "Agbani Darego, Nigeria") { 
        document.getElementById("result-2").innerHTML = "2.  correct!"
    } else {
        document.getElementById("result-2").innerHTML = "2.  Incorrect, correct answer is Agbani Darego, Nigeria!"
    }

    var answer = document.querySelector('input[name="answer-3"]:checked').value

    //checking if the answer is correct
    if (answer === "Nigeria") { 
        document.getElementById("result-3").innerHTML = "3.  correct!"
    } else {
        document.getElementById("result-3").innerHTML = "3. Incorrect, correct answer is Nigeria!"
    }

    var answer = document.querySelector('input[name="answer-4"]:checked').value

    if (answer === "Nigeria") { 
        document.getElementById("result-4").innerHTML = "4.  correct!"
    } else {
        document.getElementById("result-4").innerHTML = "4.Incorrect, correct answer is Nigeria!"
    }    

    var answer = document.querySelector('input[name="answer-5"]:checked').value

    if (answer === "Nollywood, Nigeria") { 
        document.getElementById("result-5").innerHTML = "5.  correct!"
    } else {
        document.getElementById("result-5").innerHTML = "5. Incorrect, correct answer is Nollywood, Nigeria!"
    }
    

}