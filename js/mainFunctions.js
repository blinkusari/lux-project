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
    modal.style.display = "flex";
}

function searchTicket() {
    var modal = document.getElementById("searchModal");
    modal.style.display = "flex";
}

function ticketProcessing() {
    var modal = document.getElementById("ticketprocessingModal");
    modal.style.display = "flex";
    var loaderProgress = document.querySelector('.loader-progress');
    var loaderSecure = document.querySelector('.loader-secure');
    var modalProcess = document.querySelector('.modal-body.process');
    var modalThanks = document.querySelector('.modal-body.modal-thanks');

    setTimeout(function() {
        loaderProgress.style.display = "none";
        loaderSecure.style.display = "flex";
    }, 2000);

    setTimeout(function() {
        modalProcess.style.display = "none";
        modalThanks.style.display = "flex";
    }, 4000);

    setTimeout(function() {
        closeTicket();
        closeTicketProcessing();
    }, 5000);
}

function closeTicketProcessing() {
    var modal = document.getElementById("ticketprocessingModal");
    modal.style.display = "none";
    var loaderProgress = document.querySelector('.loader-progress');
    var loaderSecure = document.querySelector('.loader-secure');
    var modalProcess = document.querySelector('.modal-body.process');
    var modalThanks = document.querySelector('.modal-body.modal-thanks');

    loaderProgress.style.display = "block";
    loaderSecure.style.display = "none";
    modalProcess.style.display = "flex";
    modalThanks.style.display = "none";
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