const duckDiv = document.querySelector(".duck");
const introduction = document.querySelector(".introduction");

const showDuckImg = () => {
  duckDiv.style.backgroundImage = `url(./assets/${Math.floor(Math.random() * 6) + 1}.png)`
};

const duckName = () => {
   if (duckDiv.style.backgroundImage === `url("./assets/1.png")`) {
    return "The OG Rubber Duck";
  } else if (duckDiv.style.backgroundImage === `url("./assets/2.png")`) {
    return "Green Rubber Duck"
  } else if (duckDiv.style.backgroundImage === `url("./assets/3.png")`) {
    return " Cool Rubber Duck"
  } else if (duckDiv.style.backgroundImage === `url("./assets/4.png")`) {
    return "Breaking Bath Rubber Duck"
  } else if (duckDiv.style.backgroundImage === `url("./assets/5.png")`) {
    return "Joker Rubber Duck"
  } else if (duckDiv.style.backgroundImage === `url("./assets/6.png")`) {
    return "Ryu Rubber Duck"
  } else {
    return ""
  }
};

const duckIntro = () => {
  introduction.innerHTML = `<h3>${duckName()} is here to help!</h3>`
};

const onPlay = e => {};

const onDelete = e => {};

const setBookmarkAttributes =  () => {};

document.addEventListener("DOMContentLoaded", () => {
  showDuckImg();
  duckIntro();
});
