const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

const weddingDate = new Date("July 14 2025 15:00:00");

function update() {
  const currentDate = new Date();
  const diff = weddingDate - currentDate;
  console.log(diff);

  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minLeft = Math.floor(diff / 1000 / 60) % 60;
  const secLeft = Math.floor(diff / 1000) % 60;

  days.innerText = daysLeft;
  hours.innerText = hoursLeft;
  min.innerText = minLeft;
  sec.innerText = secLeft;
}

update();
setInterval(update, 1000);
