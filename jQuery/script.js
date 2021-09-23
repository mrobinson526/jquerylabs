$(document).ready(function() {
    const btnSubmit = $("#btnSubmit");
    const inputTextfield = $("input[type='text']");
    btnSubmit.click(function() {
        alert("Learning is fun!");
    });
});

/* Objective 2 */
btnSubmit.click(function() {
   // alert(inputTextField.val());
});
/* Objective 3 */
$('.chgColor').hover(function(){$(this).toggleClass('chgColor_hover');});
/* Objective 4 */
$("p").mouseover(function() {
    $("p").css("background-color", "red");
});



