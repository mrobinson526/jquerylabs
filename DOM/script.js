window.addEventListener("DOMContentLoaded", function() {
/* Objective 1 add button onload, alert when clicked */
const addButton = document.createElement("button");
addButton.textContent="Add Button";
document.body.appendChild(addButton);
addButton.addEventListener("click", function() {
    alert("Learning is fun!!");
});
document.getElementsByName("btnClass").addEventListener("click", msg);

/* objective 2b when button clicked, input from text sends an alert with info typed in textbox */
const btnSubmit = document.getElementById("btnSubmit");
const inputTextField = document.getElementById("textbox");
btnSubmit.click(function () {
        alert(textbox.value);
        });

/*        Objective 3 cont'd-  create a div . Change color when hover. Return to original color on exit */
const newDiv = document.getElementById("testid");
newDiv.addEventListener("mouseover", function() {
    newDiv.textContent = newDiv.id
newDiv.style.backgroundColor = getRandomColor();
});
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i<6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
/* Objective 4 cont'd - change text color of paragraph on click */
var colorChanger = document.getElementsByTagName("button")[2];
colorChanger.addEventListener("click", function(changeColor) {
    document.querySelector("p").style.color="blue";
});
function changeColor() {
    var element=document.getElementById("textChg");
}
/* Objective 5  - Add span with name in empty div on click */
const addSpanButton = document.createElement("button");
addSpanButton.textContent = "Add Name";
document.body.appendChild(addSpanButton);

const spanContainer = document.createElement("div");
spanContainer.id = "span-container";
document.body.appendChild(spanContainer);

addSpanButton.addEventListener("click", function() {
    let ele = document.getElementById("span-container");
    let node = document.createTextNode("Margaret Robinson");
    ele.appendChild(node);
});
/* Objective 6 cont'd Click to add friends names as list items of unordered list */
let container = document.createElement("div");
container.className = "list-container";
document.body.appendChild(container);
let liBtn = document.getElementsByClassName("li-btn")[0];
let listArr = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10];
for (let i=0; i<listArr.length; i++) {
    listArr[i].addEventListener("click", function() {
        let friends = [
            "John Doe",
            "Mary Smith",
            "John Smith",
            "Mary Doe",
            "Tony Taylor",
            "Lisa Gardner",
            "Arthur Taylor",
            "Roderick Taylor",
            "Elizabeth Taylor",
            "Peter Blakely",
        ];
    });
}
    container.appendChild(li);
}
    
});
