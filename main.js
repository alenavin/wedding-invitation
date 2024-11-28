//const { default: axios } = require("axios");

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

///////////////////////////////////////////////////////////
const TOKEN = "8083808487:AAHjc03EiXUOL8Z372s8ohu7JTr-gyLTYqw";
const CHAT_ID = "-1002330677694";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document
  .getElementById("tg")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let message = `<b>Подтверждение от гостя!</b>\n`;
    message += `<b>Имя:</b> ${this.name.value}\n`;
    message += `<b>Телефон:</b> ${this.phone.value}\n`;
    message += `<b>Напитки:</b> ${this.drinks.value}\n`;
    message += `<b>Трансфер:</b> ${this.transfer.value}`;
    console.log(message);
    const notification = document.getElementById("notification");

    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        this.name.value = "";
        this.phone.value = "";
        this.drinks.value = "";
        this.transfer.value = "";
        notification.style.display = "block";
      });
  })
  .catch((err) => {
    console.warn(err);
  })
  .finally(() => {});
