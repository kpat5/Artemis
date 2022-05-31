var dropMenu = document.querySelector(".dropMenu");
var dropdownlist = document.querySelector(".dropdownlist");
var menub = document.querySelector(".menub");
var closeb = document.querySelector(".closeb");
dropMenu.addEventListener("click", () => {
  if (dropdownlist.classList.contains("menu-visible")) {
    dropdownlist.classList.remove("menu-visible");
    menub.style.display = "block";
    closeb.style.display = "none";
  } else {
    dropdownlist.classList.add("menu-visible");
    menub.style.display = "none";
    closeb.style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var counters = document.querySelectorAll(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 70);
  };

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});
