/*4. Form field text counter*/
let textAreaOne = document.querySelector('[data-js="testTextAreaOne"]');
let textAreaTwo = document.querySelector('[data-js="testTextAreaTwo"]');
let chrLeft_textArea1 = document.getElementById("summary1");

let chrLeft_textArea2 = document.getElementById("summary2");

textAreaOne.addEventListener("input", (event) => {
  charCounter(event, chrLeft_textArea1);
});

textAreaTwo.addEventListener("input", (event) => {
  charCounter(event, chrLeft_textArea2);
  event.currentTarget.setAttribute("maxlength", 150);
});

function charCounter(event, chrLeft_textArea) {
  // event.preventDefault();
  const target = event.currentTarget;
  const maxLength = target.getAttribute("maxlength");
  const currentLength = target.value.length;
  console.log(maxLength, currentLength);
  chrLeft_textArea.textContent = `${maxLength - currentLength} charecters left`;
  console.log(chrLeft_textArea.textContent);
  if (currentLength >= maxLength) {
    chrLeft_textArea.textContent = `${
      maxLength - currentLength
    } charecters left`;
  }
}

/*-------Add-A-QUESTION--------*/

const form = document.querySelector('[data-js="form"]');
const body = document.querySelector('[data-js="formBody"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  const userQuestion = formElements.textArea1Id.value;
  const userAnswer = formElements.textArea2Id.value;
  const userTag = formElements.tag2.value;
  const newSection = document.createElement("section");
  newSection.classList.add("question-card__center");
  newSection.classList.add("question-card");

  wrapper.appendChild(newSection);
  newSection.innerHTML = `
            <br />            
            <h2 class="question-card__title">${userQuestion}</h2>
            <button  data-js ="toggleButton" id = "btnPrepend" class="question-card__button">Your Answer</button>
            <p id ="d-c" class="question-card__answer">${userAnswer}</p>
            <div class="question-card__tags">
            <div class="question-card__tag">#${userTag}</div>
        </div>`;
  chrLeft_textArea2.textContent = `150 charecters left`;
  chrLeft_textArea1.textContent = `150 charecters left`;

  form.reset();
});

/*1. Toggle functionality for button*/
let btn2 = document.querySelector('[data-js="toggleButton"]');
let QuestionCardAnswer1 = document.querySelector("#d-c");
console.log("11111111");

// btn1.addEventListener("click", (event) => {
//   console.log("11111111");
//   event.preventDefault();

//   const initialText = "Show answer";
//   if (btn1.textContent.includes(initialText)) {
//     QuestionCardAnswer1.classList.toggle("hide");

//     btn1.textContent = "Hide answer";
//   } else {
//     btn1.textContent = initialText;
//     QuestionCardAnswer1.classList.toggle("hide");
//   }
// });

btn2.addEventListener("click", function (event) {
  event.preventDefault();

  console.log("22222");

  const target = event.target.closest("#btnPrepend"); // Or any other selector.

  if (target) {
    const initialText = "Show answer";
    if (btn2.textContent.includes(initialText)) {
      QuestionCardAnswer1.classList.toggle("hide");

      btn2.textContent = "Hide answer";
    } else {
      btn2.textContent = initialText;
      QuestionCardAnswer1.classList.toggle("hide");
    }
  }
});
