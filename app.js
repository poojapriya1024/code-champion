document.addEventListener("DOMContentLoaded", function () {

const days = document.querySelectorAll(".days li");
const problemTitle = document.querySelector(".problem-title");
const quote = document.querySelector(".quote");
const problemBtn = document.querySelector(".problem-btn");

let problemList = [];


const redirect = () => {
    window.open("main.html");
};

const assignValues = (problemList) => {
    days.forEach((day) => {
        console.log("Day element found");
        if (!day.classList.contains("inactive")) {
            day.addEventListener("click", () => {
                const randomIndex = Math.floor(Math.random() * problemList.length);
                const currProblem = problemList[randomIndex];

                if (currProblem) {
                    problemTitle.innerHTML = currProblem.title;
                    quote.innerHTML = currProblem.quote;
                    const problemLink = currProblem.link;

                    problemBtn.addEventListener("click", () => {
                        window.open(problemLink);
                    });

                    redirect(); 
                }
            });
        }
    });
};

fetch("problems_info.json")
    .then(response => response.json())
    .then((data) => {
        problemList = data;
        console.log(problemList);
        assignValues(problemList);
    })
    .catch((err) => {
        console.error("Oops! Something went wrong");
    });
});