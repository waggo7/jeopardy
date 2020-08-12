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

let categories = [

];

async function findQuestionInfo() {
    const response = await axios.get('http://jservice.io/api/random');
    const { data } = response;
    const result = data[0].category_id;

    getCategory(result);

}

const width = 6;
const height = 7;
let board = [];

function makeTable() {
    for (let x = 0; x <= height; x++) {
        board.push(Array.from({ length: width }))
    }
}

function makeHtmlTable() {
    const board = document.getElementById('table');
    const trow = document.createElement("tr");
    trow.setAttribute("id", "categories");
    trow.classList = "table table-responsive"
    for (let x = 0; x <= width; x++) {
        const headCell = document.createElement("td");
        headCell.id = 'top';

        trow.append(headCell);
    }
    board.append(trow);
    for (let y = 0; y < height; y++) {
        const row = document.createElement("tr");
        row.id = "column"
        row.classList = "table";
        for (let x = 0; x <= width; x++) {
            const cell = document.createElement("td");
            cell.id = "questions";
            //cell.classList = "border-white";
            row.append(cell);
        }
        board.append(row);
    }
    makeTable();
    //findQuestionInfo();
    //fillTable()

}
async function fillTable(question) {
    const top = document.getElementById('top');
    for (let x = 0; x <= top.length; x++) {
        top[x].innerText = categories;
        console.log(top);
    }


}

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

function getCategoryIds(id) {


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
    const response = await axios.get(`http://jservice.io/api/category`, { params: { id: catId } });
    const { data } = response;
    const catName = data.title;
    let clueIndx;
    for (let x = 0; x <= width; x++) {
        clueIndx = data.clues[x];
        categories.push(clueIndx);
    }

    fillTable(catName);

}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */



/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */


/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {

}

function addSpinner() {

}

/** On click of start / restart button, set up game. */
const startBtn = document.getElementById('startbtn');
// TODO
function beginPlay() {
    //following a previously called eventlistener "beginplay" will take on the click and set up the table and place categories w/hints
    startBtn.addEventListener("click", handleClick)
}
/** On page load, add event handler for clicking clues */
// TODO.
beginPlay();

function handleClick(evt) {
    evt.preventDefault();
    // console.log("click");
    evt.target.style.display = "none";
    findQuestionInfo();
    makeHtmlTable();
    fillTable();
}
//findQuestionInfo();