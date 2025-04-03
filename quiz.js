// Function to submit and evaluate the quiz
function submitQuiz() {
    let score = 0;
    let totalQuestions = 5;
    let resultDetails = "";

    // Correct answers
    let answers = {
        q1: "C", // Broken Authentication
        q2: "A", // Using prepared statements
        q3: "B", // Stealing user data via scripts
        q4: "prepared statements", // Fill-in-the-blank answer
        q5: ["A", "C", "D"] // Multiple correct answers
    };

    // Checking multiple-choice questions 
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.getElementById("q4").value.trim().toLowerCase();
    
    if (q1 && q1.value === answers.q1) score++;
    if (q2 && q2.value === answers.q2) score++;
    if (q3 && q3.value === answers.q3) score++;
    if (q4 === answers.q4) score++;

    // Checking multiple-choice 
    let q5Answers = document.querySelectorAll('input[name="q5"]:checked');
    let selectedQ5 = Array.from(q5Answers).map(input => input.value);
    if (arraysEqual(selectedQ5, answers.q5)) score++;

    // Display result & 3 correct answers to pass
    let passThreshold = 3; 
    let resultMessage = `You scored ${score} out of ${totalQuestions}. `;
    resultMessage += (score >= passThreshold) ? "You passed!" : "Try again!";
    document.getElementById("result").innerHTML = resultMessage;

    // Detailed results
    resultDetails += `<p>1. Correct Answer: ${answers.q1} (Broken Authentication)</p>`;
    resultDetails += `<p>2. Correct Answer: ${answers.q2} (Using prepared statements)</p>`;
    resultDetails += `<p>3. Correct Answer: ${answers.q3} (Stealing user data via scripts)</p>`;
    resultDetails += `<p>4. Correct Answer: Prepared Statements</p>`;
    resultDetails += `<p>5. Correct Answers: A (Input validation), C (CSP), D (Escaping user input)</p>`;

    document.getElementById("detailedResult").innerHTML = resultDetails;
}

// Function to restart the quiz
function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("result").innerHTML = "";
    document.getElementById("detailedResult").innerHTML = "";
}

// Helper function to compare two arrays (for multi-answer question)
function arraysEqual(a, b) {
    return a.sort().toString() === b.sort().toString();
}
