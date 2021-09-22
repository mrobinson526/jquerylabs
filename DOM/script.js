/* Objective 1 add button onload, alert when clicked */
const addButton = document.createElement("button");
addButton.textContent="Add Button";
document.body.appendChild(addButton);
addButton.addEventListener("click", function() {
    alert("Learning is fun!!");
});
document.getElementsByName("btnClass").addEventListener("click", msg);

/* objective 2b when button clicked, input from text sends an alert with info typed in textbox */
var input = document.getElementById('textbox');
     function namet() {
        alert(textbox.value);
        }

/*        Objective 3 cont'd-  create a div . Change color when hover. Return to original color on exit */