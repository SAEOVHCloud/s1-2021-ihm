const first = document.querySelectorAll(".first");
const second = document.querySelectorAll(".second");
const third = document.querySelectorAll(".third");
const fourth = document.querySelectorAll(".fourth");
const fifth = document.querySelectorAll(".fifth");
const sixth = document.querySelectorAll(".sixth");
const seventh = document.querySelectorAll(".seventh");
const eighth = document.querySelectorAll(".eighth");
const nineth = document.querySelectorAll(".nineth");
const tenth = document.querySelectorAll(".tenth");
const eleventh = document.querySelectorAll(".eleventh");
const twelveth = document.querySelectorAll(".twelveth");
const thirteenth = document.querySelectorAll(".thirteenth");
const fourteenth = document.querySelectorAll(".fourteenth");
const fifteenth = document.querySelectorAll(".fifteenth");
const sixteenth = document.querySelectorAll(".sixteenth");
const seventeenth = document.querySelectorAll(".seventeenth");
const eighteenth = document.querySelectorAll(".eighteenth");
const nineteenth = document.querySelectorAll(".nineteenth");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  for (var i = 0; i < first.length; ++i) {
    if (window.scrollY < 350) {
      first[i].style.opacity = "100%";
    } else {
      first[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < second.length; ++i) {
    if (window.scrollY < 650) {
      second[i].style.opacity = "100%";
    } else {
      second[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < third.length; ++i) {
    if (window.scrollY > 350 && window.scrollY < 950) {
      third[i].style.opacity = "100%";
    } else {
      third[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < fourth.length; ++i) {
    if (window.scrollY > 650 && window.scrollY < 1250) {
      fourth[i].style.opacity = "100%";
    } else {
      fourth[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < fifth.length; ++i) {
    if (window.scrollY > 950 && window.scrollY < 1550) {
      fifth[i].style.opacity = "100%";
    } else {
      fifth[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < sixth.length; ++i) {
    if (window.scrollY > 1250 && window.scrollY < 1850) {
      sixth[i].style.opacity = "100%";
    } else {
      sixth[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < seventh.length; ++i) {
    if (window.scrollY > 1550 && window.scrollY < 2150) {
      seventh[i].style.opacity = "100%";
    } else {
      seventh[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < eighth.length; ++i) {
    if (window.scrollY > 1850 && window.scrollY < 2450) {
      eighth[i].style.opacity = "100%";
    } else {
      eighth[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < nineth.length; ++i) {
    if (window.scrollY > 2150 && window.scrollY < 2750) {
      nineth[i].style.opacity = "100%";
    } else {
      nineth[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < tenth.length; ++i) {
    if (window.scrollY > 2450 && window.scrollY < 3050) {
      tenth[i].style.opacity = "100%";
    } else {
      tenth[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < eleventh.length; ++i) {
    if (window.scrollY > 2750 && window.scrollY < 3350) {
      eleventh[i].style.opacity = "100%";
    } else {
      eleventh[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < twelveth.length; ++i) {
    if (window.scrollY > 3050 && window.scrollY < 3650) {
      twelveth[i].style.opacity = "100%";
    } else {
      twelveth[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < thirteenth.length; ++i) {
    if (window.scrollY > 3350 && window.scrollY < 3950) {
      thirteenth[i].style.opacity = "100%";
    } else {
      thirteenth[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < fourteenth.length; ++i) {
    if (window.scrollY > 3650 && window.scrollY < 4250) {
      fourteenth[i].style.opacity = "100%";
    } else {
      fourteenth[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < fifteenth.length; ++i) {
    if (window.scrollY > 3950 && window.scrollY < 4550) {
      fifteenth[i].style.opacity = "100%";
    } else {
      fifteenth[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < sixteenth.length; ++i) {
    if (window.scrollY > 4250 && window.scrollY < 4850) {
      sixteenth[i].style.opacity = "100%";
    } else {
      sixteenth[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < seventeenth.length; ++i) {
    if (window.scrollY > 4550 && window.scrollY < 5150) {
      seventeenth[i].style.opacity = "100%";
    } else {
      seventeenth[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < eighteenth.length; ++i) {
    if (window.scrollY > 4850 && window.scrollY < 5450) {
      eighteenth[i].style.opacity = "100%";
    } else {
      eighteenth[i].style.opacity = "0%";
    }
  }
  for (var i = 0; i < nineteenth.length; ++i) {
    if (window.scrollY > 5150 && window.scrollY < 5750) {
      nineteenth[i].style.opacity = "100%";
    } else {
      nineteenth[i].style.opacity = "0%";
    }
  }
});
