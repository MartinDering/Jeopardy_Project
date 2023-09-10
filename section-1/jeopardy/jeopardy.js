// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]
const Url = "https://jservice.io/api/";
const NUM_QUESTIONS_PER_CAT = 5;
const NUM_CATEGORIES = 6;
const NUM_CLUES = 5;

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
  let response = await axios.get(`${Url}categories?count=100`);
  let categoryId = response.data.map((c) => c.id);
  return _.sampleSize(categoryId, NUM_CATEGORIES);
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
  let response = await axios.get(`${Url}category?id=${catId}`);
  let cat = response.data;
  let allClues = cat.clues;
  let randomClue = _.sampleSize(allClues, NUM_CLUES);
  let clues = randomClue.map((r) => ({
    question: r.question,
    answer: r.answer,
    showing: null,
  }));
  return { title: cat.title, clues };
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
  $("#jhead").empty();
  let $tr = $("<tr>");
  for (let catIdx = 0; catIdx < NUM_CATEGORIES; catIdx++) {
    $tr.append($("<th>").text(categories[catIdx].title));
  }
  $("#jhead").append($tr);

  $("#jbody").empty();
  for (let clueIdx = 0; clueIdx < NUM_CLUES; clueIdx++) {
    $tr = $("<tr>");
    for (let catIdx = 0; catIdx < NUM_CATEGORIES; catIdx++) {
      $tr.append(
        $("<td>")
          .attr("id", `${catIdx}-${clueIdx}`)
          .text("?")
          .click(handleClick)
      );
    }
    $("#jbody").append($tr);
  }
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
  let id = evt.target.id;
  let [catId, clueId] = id.split("-");
  let clue = categories[catId].clues[clueId];

  let msg;
  if (!clue.showing) {
    msg = clue.question;
    clue.showing = "question";
  } else if (clue.showing === "question") {
    msg = clue.answer;
    clue.showing = "answer";
  } else {
    // already showing answer; ignore
    return;
  }

  // Update text of cell
  $(`#${catId}-${clueId}`).html(msg);
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
  $("#jeopardy").hide();
  $("#spin-container").show();
  $("#start").prop("disabled", true);
}
/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
  $("#jeopardy").show();
  $("#spin-container").hide();
  $("#start").prop("disabled", false);
}

// Hides restart button and spin container until game is started.

$(document).ready(function () {
  $("#restart").hide();
  $("#spin-container").hide();
});
/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */
function restartButton() {
  let restart = document.createElement("button");

  restart.textContent = "Restart";
  restart.id = "restart";

  const buttonContainer = document.getElementById("jeopardy");
  buttonContainer.appendChild(restart);

  restart.addEventListener("click", setupAndStart);
}

async function setupAndStart() {
  showLoadingView();

  let catIds = await getCategoryIds();
  categories = [];

  for (let catId of catIds) {
    categories.push(await getCategory(catId));
  }

  fillTable();
  hideLoadingView();
  restartButton();
}

/** On click of start / restart button, set up game. */
$(async function () {
  $("#start").on("click", setupAndStart);
  $("#restart").on("click", setupAndStart);
});

// TODO

/** On page load, add event handler for clicking clues */

// TODO
