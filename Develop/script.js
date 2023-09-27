// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

$(document).ready(function () {
  //grab IDs from document html and assign to variable
  let timeEl = $("#currentTime");
  let dayEl = $("#currentDay");

  let box9 = $("#div9");
  let box10 = $("#div10");
  let box11 = $("#div11");
  let box12 = $("#div12");
  let box1 = $("#div1");
  let box2 = $("#div2");
  let box3 = $("#div3");
  let box4 = $("#div4");
  let box5 = $("#div5");

  //gets user's input from local storage
  box9.val(localStorage.getItem("userInput9"));
  box10.val(localStorage.getItem("userInput10"));
  box11.val(localStorage.getItem("userInput11"));
  box12.val(localStorage.getItem("userInput12"));
  box1.val(localStorage.getItem("userInput1"));
  box2.val(localStorage.getItem("userInput2"));
  box3.val(localStorage.getItem("userInput3"));
  box4.val(localStorage.getItem("userInput4"));
  box5.val(localStorage.getItem("userInput5"));

  let button9 = $("#btn9");
  let button10 = $("#btn10");
  let button11 = $("#btn11");
  let button12 = $("#btn12");
  let button1 = $("#btn1");
  let button2 = $("#btn2");
  let button3 = $("#btn3");
  let button4 = $("#btn4");
  let button5 = $("#btn5");
  let clearBtn = $("#clearBtn");

  //gets current time
  var timeNow = parseInt(dayjs().format("HH"));

  //clears local storage each time
  function clear() {
    localStorage.clear();

    box1.val("");
    box2.val("");
    box3.val("");
    box4.val("");
    box5.val("");
    box9.val("");
    box10.val("");
    box11.val("");
    box12.val("");
  }
  //
  function tick() {
    dayEl.text(dayjs().format("MMMM DD, YYYY"));
    timeEl.text(dayjs().format("hh:mm:ssA"));
    $(".jumbotron").append(dayEl);
    $(".jumbotron").append(timeEl);
  }
  //determines if event is in the past, present, or future based on variable timeNow
  function checkTime() {
    if (parseInt(box9.attr("data-hour")) > timeNow) {
      box9.removeClass("past present future");
      box9.addClass("future");
    } else if (parseInt(box9.attr("data-hour")) === timeNow) {
      box9.removeClass("past present future");
      box9.addClass("present");
    } else {
      box9.removeClass("past present future");
      box9.addClass("past");
    }

    if (parseInt(box10.attr("data-hour")) > timeNow) {
      box10.removeClass("past present future");
      box10.addClass("future");
    } else if (parseInt(box10.attr("data-hour")) === timeNow) {
      box10.removeClass("past present future");
      box10.addClass("present");
    } else {
      box10.removeClass("past present future");
      box10.addClass("past");
    }

    if (parseInt(box11.attr("data-hour")) > timeNow) {
      box11.removeClass("past present future");
      box11.addClass("future");
    } else if (parseInt(box11.attr("data-hour")) === timeNow) {
      box11.removeClass("past present future");
      box11.addClass("present");
    } else {
      box11.removeClass("past present future");
      box11.addClass("past");
    }

    if (parseInt(box12.attr("data-hour")) > timeNow) {
      box12.removeClass("past present future");
      box12.addClass("future");
    } else if (parseInt(box12.attr("data-hour")) === timeNow) {
      box12.removeClass("past present future");
      box12.addClass("present");
    } else {
      box12.removeClass("past present future");
      box12.addClass("past");
    }

    if (parseInt(box1.attr("data-hour")) > timeNow) {
      box1.removeClass("past present future");
      box1.addClass("future");
    } else if (parseInt(box1.attr("data-hour")) === timeNow) {
      box1.removeClass("past present future");
      box1.addClass("present");
    } else {
      box1.removeClass("past present future");
      box1.addClass("past");
    }

    if (parseInt(box2.attr("data-hour")) > timeNow) {
      box2.removeClass("past present future");
      box2.addClass("future");
    } else if (parseInt(box2.attr("data-hour")) === timeNow) {
      box2.removeClass("past present future");
      box2.addClass("present");
    } else {
      box2.removeClass("past present future");
      box2.addClass("past");
    }

    if (parseInt(box3.attr("data-hour")) > timeNow) {
      box3.removeClass("past present future");
      box3.addClass("future");
    } else if (parseInt(box3.attr("data-hour")) === timeNow) {
      box3.removeClass("past present future");
      box3.addClass("present");
    } else {
      box3.removeClass("past present future");
      box3.addClass("past");
    }

    if (parseInt(box4.attr("data-hour")) > timeNow) {
      box4.removeClass("past present future");
      box4.addClass("future");
    } else if (parseInt(box4.attr("data-hour")) === timeNow) {
      box4.removeClass("past present future");
      box4.addClass("present");
    } else {
      box4.removeClass("past present future");
      box4.addClass("past");
    }

    if (parseInt(box5.attr("data-hour")) > timeNow) {
      box5.removeClass("past present future");
      box5.addClass("future");
    } else if (parseInt(box5.attr("data-hour")) === timeNow) {
      box5.removeClass("past present future");
      box5.addClass("present");
    } else {
      box5.removeClass("past present future");
      box5.addClass("past");
    }
  }

  //calls the date and time display
  tick();

  setInterval(tick, 1000);
  setInterval(checkTime, 600000);

// clears schedule when "clear" btn is clicked
  clearBtn.on("click", clear);

  // saves user input into local storage and prevents clearing data upload page refresh
  button9.on("click", function (event) {
    event.preventDefault();
    if (box9.val() !== "") {
      localStorage.setItem("userInput9", box9.val());
    }
  });

  button10.on("click", function (event) {
    event.preventDefault();
    if (box10.val() !== "") {
      localStorage.setItem("userInput10", box10.val());
    }
  });

  button11.on("click", function (event) {
    event.preventDefault();
    if (box11.val() !== "") {
      localStorage.setItem("userInput11", box11.val());
    }
  });

  button12.on("click", function (event) {
    event.preventDefault();
    if (box12.val() !== "") {
      localStorage.setItem("userInput12", box12.val());
    }
  });

  button1.on("click", function (event) {
    event.preventDefault();
    if (box1.val() !== "") {
      localStorage.setItem("userInput1", box1.val());
    }
  });

  button2.on("click", function (event) {
    event.preventDefault();
    if (box2.val() !== "") {
      localStorage.setItem("userInput2", box2.val());
    }
  });

  button3.on("click", function (event) {
    event.preventDefault();
    if (box3.val() !== "") {
      localStorage.setItem("userInput3", box3.val());
    }
  });

  button4.on("click", function (event) {
    event.preventDefault();
    if (box4.val() !== "") {
      localStorage.setItem("userInput4", box4.val());
    }
  });

  button5.on("click", function (event) {
    event.preventDefault();
    if (box5.val() !== "") {
      localStorage.setItem("userInput5", box5.val());
    }
  });

  checkTime();
});
