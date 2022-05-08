//* Створити сторінку, що показує нумерований список пісень.

// const playList = [
//   {
//     author: "LED ZEPPELIN",

//     song: "STAIRWAY TO HEAVEN",
//   },

//   {
//     author: "QUEEN",

//     song: "BOHEMIAN RHAPSODY",
//   },

//   {
//     author: "LYNYRD SKYNYRD",

//     song: "FREE BIRD",
//   },

//   {
//     author: "DEEP PURPLE",

//     song: "SMOKE ON THE WATER",
//   },

//   {
//     author: "JIMI HENDRIX",

//     song: "ALL ALONG THE WATCHTOWER",
//   },

//   {
//     author: "AC/DC",

//     song: "BACK IN BLACK",
//   },

//   {
//     author: "QUEEN",

//     song: "WE WILL ROCK YOU",
//   },

//   {
//     author: "METALLICA",

//     song: "ENTER SANDMAN",
//   },
// ];

// html = "<ol>";

// playList.forEach((item) => {
//   html += "<li>" + item.song + "</li>";
// });

// html += "</ul>";

// document.write(html);


//* Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

const modalOpen = () => {
  document.getElementById("js-modal").classList.toggle("show");
};

document.getElementById("js-button-open").addEventListener("click", modalOpen);
document.getElementById("js-button-close").addEventListener("click", modalOpen);

