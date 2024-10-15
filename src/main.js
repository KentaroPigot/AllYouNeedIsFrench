console.log("HEY");

const questions = document.querySelectorAll(".question");

console.log(questions);

questions.forEach((question) => {
  const title = question.querySelector(".question__title");
  title.addEventListener("click", () => {
    question.classList.toggle("active");

    // Collapse other dropdowns
    // questions.forEach((q) => {
    //   if (q !== question) {
    //     q.classList.remove("active");
    //   }
    // });
  });
});
