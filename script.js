let template = document.querySelectorAll(".template");
let breakfast = document.querySelectorAll(".breakfast");
let lunch = document.querySelectorAll(".lunch");
let shakes = document.querySelectorAll(".shakes");
let dinner = document.querySelectorAll(".dinner");
let nav = document.querySelectorAll("#navbarListe li");

let food = [template, breakfast, lunch, shakes, dinner];

nav.forEach(function (value, key) {
    value.addEventListener("click", function () {
        template.forEach(function (element) {
            element.style.display = "none";
        });

        food[key].forEach(function (element) {
            element.style.display = "block";
        });
    });
});
