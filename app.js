const changeButton = document.getElementById("change");

changeButton.onclick = () => {
  const boxes = document.querySelectorAll(".box");

  Array.from(boxes).forEach((box, index) => {
    const random = Math.random() * 255;
    const roundedRandomNumber = Math.trunc(random);
    console.log(roundedRandomNumber);
    box.innerText = "Box Number " + index;
    box.style.background = `rgb(0,${roundedRandomNumber},200)`;
  });
};

setInterval(() => {
  const boxes = document.querySelectorAll(".box");

  Array.from(boxes).forEach((box, index) => {
    const random = Math.random() * 255;
    const roundedRandomNumber = Math.trunc(random);
    console.log(roundedRandomNumber);
    box.innerText = "Box Number " + index;
    box.style.background = `rgb(0,${roundedRandomNumber},200)`;
  });
}, 500);
