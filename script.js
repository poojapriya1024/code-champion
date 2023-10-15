const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
navIcons = document.querySelectorAll(".icons span");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const renderCalendar = () => {
    let firstDateofMonth = new Date(currYear, currMonth,1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1,0).getDate();
    let lastDateofLastMonth = new Date(currYear, currMonth,0).getDate();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let liTag = "";

    for(let j = firstDateofMonth; j>0;j--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - j + 1}</li>`;
        // <a href="#"><li class="inactive">${lastDateofLastMonth - j + 1}</li></a>
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === date.getMonth() && currYear === date.getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    
    for (let i = lastDateofMonth + 1; i <= lastDateofMonth + 6 - lastDayofMonth; i++) {
        liTag += `<li class="inactive">${i - lastDateofMonth }</li>`;
    }
    
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;

}

renderCalendar();

navIcons.forEach( (icon) => {
    // adding click events on both icons
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth-1: currMonth+1;
        
        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); //updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date();
        }
        
        renderCalendar();
    });
});

const days = document.querySelectorAll(".days li");
console.log(days);

days.forEach((day) => {
    day.addEventListener("click", () => {
        if(!day.classList.contains('inactive')) {
            window.open('main.html', '_blank');
        }
    });
});

