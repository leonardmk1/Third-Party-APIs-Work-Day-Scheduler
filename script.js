// sets the Day of the Week, Month, Date, and Year in the div
$("#date").text(
  moment()
    .format("LLLL")
    .slice(0, -8)
);
// This section controls the background color with the time from moment.js
// if the time is higher or past the time the background color darkens
// if the time is within the hour of the event the background color is red
// if the event has yet to happen then the background color is green
$(".col-sm-8").each(function(i) {
  if (parseInt($(this).attr("id")) < parseInt(moment().format("HH"))) {
    $(this).addClass("bg-dark text-white");
  }
  if (parseInt($(this).attr("id")) === parseInt(moment().format("HH"))) {
    $(this).addClass("bg-danger");
  }
  if (parseInt($(this).attr("id")) > parseInt(moment().format("HH"))) {
    $(this).addClass("bg-success");
  }
});
// On a click into the events column and removes the class display none and an input with display with a key focus ready to type will display
$(".col-sm-8").on("click", function() {
  $(this)
    .find("input")
    .removeClass("d-none");
  $(this)
    .find("input")
    .focus();
});
// This section the blur event occurs when an element loses focus and replaces the div with the value of what is typed
$(".d-none").on("blur", function() {
    if ($(this).val()){
        $(this)
        .parent()
        .append($(this).val()+"<br>"); 
    }
  $(this).addClass("d-none");
  $(this).val("");
});
// On the click of schedule the value in the events column will be set in local storage. 
$(".schedule").on("click", function() {
    var id = $(this).attr("data-target")
    localStorage.setItem(id, $("#" + id).html())
});
// upon loading the page the stored values in local storage will appear in the correct time slot they were saved in previously.
for (let i = 9; i <= 17 ; i++) {
    if (localStorage.getItem(i)){
        if (localStorage.getItem(i).slice(-4)==="<br>"){
            $("#" + i).append(localStorage.getItem(i))
        } else {
            $("#" + i).append(localStorage.getItem(i)+"<br>")
        }
    }
}
    
