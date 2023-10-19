var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active-menu");
        this.classList.toggle("caret-down");
    });
}

document.getElementById('leagueMenuBurger').addEventListener("click", function () {
    const menu = document.getElementById('leaguesMenu');
    menu.classList.toggle('opened-menu');
});


function openTicket() {
    var modal = document.getElementById("ticketModal");
    modal.style.display = "block";
}

function searchTicket() {
    var modal = document.getElementById("searchModal");
    modal.style.display = "block";
}

function closeTicket() {
    var modal = document.getElementsByClassName("modal");
    console.log(modal);
    for (let i = 0; i < modal.length; i++) {
        modal[i].style.display = "none";
    }
    ticketNumberInput.value = '';
    codeNumberInput.value = '';

}

window.onclick = function (event) {
    var modal = document.getElementsByClassName("modal");
    for (let i = 0; i < modal.length; i++) {
        if (event.target == modal[i]) {
            modal[i].style.display = "none";
        }
    }

}


const ticketNumberInput = document.getElementById('ticket-number');
const codeNumberInput = document.getElementById('code-number');
const calculatorWrapper = document.querySelector('.calculator-wrapper');
let activeInput = null;

ticketNumberInput.addEventListener('focus', function () {
    setActiveInput(ticketNumberInput);
});

codeNumberInput.addEventListener('focus', function () {
    setActiveInput(codeNumberInput);
});

function setActiveInput(inputField) {
    activeInput = inputField;
}

const numKeys = document.querySelectorAll('.numKey');
const cKey = document.getElementById('cKey');
const delKey = document.getElementById('delKey');

numKeys.forEach(key => {
    key.addEventListener('click', function () {
        if (activeInput) {
            activeInput.value += this.value;
        }
    });
});

cKey.addEventListener('click', function () {
    if (activeInput) {
        activeInput.value = '';
    }
});

delKey.addEventListener('click', function () {
    if (activeInput) {
        activeInput.value = activeInput.value.slice(0, -1);
    }
});