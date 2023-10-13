var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
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

function closeTicket() {
    var modal = document.getElementById("ticketModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("ticketModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}