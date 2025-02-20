document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.querySelector(".header__hover");
  const icon = document.getElementById("header__img");

  darkModeToggle.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      icon.src = "./images/Settings Icon (1).png";
    } else {
      icon.src = "./images/Settings Icon.png";
    }
  });
});

const textarea = document.querySelector("textarea");
const list = document.querySelector("#list");

textarea.addEventListener("input", () => {
  let element = {};

  const elementsCounter = [];
  const elements = textarea.value.split("");

  elements.forEach((el) => {
    const item = elementsCounter.find((e) => {
      return Object.keys(e)[0].toLowerCase() == el.toLowerCase();
    });
    if (item) {
      item[el] += 1;
    } else {
      element[el] = 1;
      elementsCounter.push(element);
    }
    element = {};
  });

  list.textContent = "";

  elementsCounter.forEach((el) => {
    const length = textarea.value.length;
    const key = Object.keys(el)[0];
    console.log(key, (el[key] / length) * 100);

    const item = document.createElement("li");
    const wrapper = document.createElement("div");
    const procces = document.createElement("div");
    const result = document.createElement("div");
    const spanChar = document.createElement("span");
    const spanCount = document.createElement("span");
    const spanPersent = document.createElement("span");

    item.classList.add("item");
    textarea.classList.add("textarea");
    wrapper.classList.add("wrapper");
    procces.classList.add("procces");
    procces.style.width = `${((el[key] / length) * 100).toFixed(2)}%`;
    wrapper.appendChild(procces);

    spanChar.textContent = key;
    spanCount.textContent = `${el[key]}, `;

    spanPersent.textContent = `${((el[key] / length) * 100).toFixed(2)}%`;

    result.classList.add("result");
    result.append(spanCount, spanPersent);

    item.append(spanChar, wrapper, result);

    list.appendChild(item);
  });
});
