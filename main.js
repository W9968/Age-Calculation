const interval = 1000;
const ageContainer = document.querySelector(".age");
const secondAgeCount = document.querySelector(".ageinsecond");

setInterval(() => {
  let currentDate = new Date();
  const brithYear = new Date("1999-06-08");
  /* *** */
  let timeDiff = Math.abs(brithYear.getTime() - currentDate.getTime());
  let AgeInSecond = Math.ceil(timeDiff / 1000);
  secondAgeCount.innerHTML = "<p>Age</p>" + AgeInSecond;
  /* *** */
  let age = AgeInSecond / 60 / 60 / 24 / 356;
  ageContainer.innerHTML = Math.floor(age);
  /* *** */
}, interval);
