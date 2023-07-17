/*1. Toggle functionality for bookmark*/
let image1 = document.querySelector('[data-js="questionOneBookmark"]');
let image2 = document.querySelector('[data-js="questionTwoBookmark"]');

let isFirstImage = true;

image1.addEventListener("click", (event) => {
  event.preventDefault();
  if (isFirstImage) {
    image1.classList.add((image1.src = "assets/bookmark.png"));
  } else {
    image1.classList.add((image1.src = "assets/bookmark_filled.png"));
  }

  isFirstImage = !isFirstImage;
});

isFirstImage = false;

/*1. Toggle functionality for button*/
let btn = document.querySelector(".question-card__button");
let QuestionCardAnswer = document.querySelector("#d-c");

// const isHiddenAnswer = true;

btn.addEventListener("click", (event) => {
  event.preventDefault();

  const initialText = "Show answer";
  if (btn.textContent.includes(initialText)) {
    QuestionCardAnswer.classList.toggle("hide");

    btn.textContent = "Hide answer";
  } else {
    btn.textContent = initialText;
    QuestionCardAnswer.classList.toggle("hide");
  }
});
