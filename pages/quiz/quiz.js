const correctAnswers = {
    q1: "a", 
    q2: "c", 
    q3: "b", 
  };

  document
    .getElementById("quizForm")
    .addEventListener("submit", function (e) {
      e.preventDefault(); 

      const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
      };

      let score = 0;
      const tableBody = document.querySelector("#answersTable tbody");
      tableBody.innerHTML = ""; 

      Object.keys(correctAnswers).forEach((question, index) => {
        const isCorrect =
          userAnswers[question] === correctAnswers[question];
        if (isCorrect) score++;

        const row = `
        <tr>
            <td>Question ${index + 1}</td>
            <td>${userAnswers[question] || "Pas de réponse"}</td>
            <td>${correctAnswers[question]}</td>
        </tr>
      `;
        tableBody.innerHTML += row;
      });

      document.getElementById(
        "score"
      ).innerText = `Vous avez obtenu ${score} sur ${
        Object.keys(correctAnswers).length
      }`;
      document.getElementById("quizResults").style.display = "block";
    });