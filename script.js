// display the date in the header
var currentDay = moment().format("dddd, MMMM Do");

$("#currentDay").text(currentDay);


var inputEvent = $('.description');
var saveEvent = $('.saveBtn');
var time = $('.time-block');
var hourEl = $('.hour')

// function to save input into local storage
function eventEntered (event) {
  event.preventDefault();

  var saved = $(this).parent().find('.description').first().val();
  console.log(saved);
  localStorage.setItem('description', saved);
}
saveEvent.on('click', eventEntered);

var currentHour = moment().hour()
console.log(currentHour);
// function to change textarea into diffrent color base on past, present, future
function colorCode(){

for (var index = 0; index < time.length; index ++) {
  var element = $(time[index]);
  var now = element.attr('data-time')
  var textBox = $('textarea')
  // console.log(element)
  // console.log(time)
  if (currentHour === now) {
    textBox.addClass('present')
  }
  else if (currentHour > now) {
    textBox.addClass('past')
  }
  else (currentHour < now) 
    textBox.addClass('future')
  
}
}
colorCode();
// var d = new Date();
// var hours = d.getHours();
// function checkPresent() {

//   for (time = 6; time < 23; time++) {
//     var timeblock = $("#" + time);
//     console.log($("#" + time))

//     if (time == hours) {
//       timeblock.addClass("present")
//     } else if (time < hours) {
//       timeblock.addClass("past")
//     } else {
//       timeblock.addClass("future")
//     }
//     $("#" + time).val(localStorage.getItem("" + time));

//   }
// }
// checkPresent();