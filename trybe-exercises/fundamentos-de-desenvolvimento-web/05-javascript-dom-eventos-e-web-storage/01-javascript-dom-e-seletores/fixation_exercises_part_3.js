let h1 = document.querySelector("#header-container");

h1.style.color = "rgb(255,255,255)";
h1.style.backgroundColor = "rgb(47,79,79)";

let emergency_div = document.querySelectorAll(".emergency-tasks div");

emergency_div[0].style.backgroundColor = "rgb(255,69,0)";
emergency_div[1].style.backgroundColor = "rgb(255,165,0)";

let no_emergency_div = document.querySelectorAll(".no-emergency-tasks div");

no_emergency_div[0].style.backgroundColor = "rgb(255,215,0)";
no_emergency_div[1].style.backgroundColor = "rgb(255,222,173)";

// let h3 = document.getElementsByTagName("h3");

let h3 = document.querySelectorAll("h3");

for (let i = 0; i < h3.length; i += 1) {
    h3[i].style.color = "rgb(0,0,0)";
    h3[i].style.paddingTop = "85px";
}

let footer = document.querySelector("footer");

footer.style.backgroundColor = "rgb(47,79,79)";


