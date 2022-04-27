let gridSize = 100;
let intervalId;
let position = 1;
let speedMs = 100;

const containerElement = document.getElementById("target");

for (i = 0; i < gridSize; i++) {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.id = "n" + (i + 1);
  newDiv.innerHTML = i + 1;
  containerElement.appendChild(newDiv);
}

function change() {
  // clean up old element
  const previousElementId = position - 1;
  const previousElement = document.getElementById("n" + previousElementId);

  if (previousElement) {
    previousElement.classList.remove("on");
  }

  // if done, exit
  if (position > gridSize) {
    clearInterval(intervalId);
    intervalId = null;
    console.log("end");
    return;
  }

  // customize the next element
  const currentElement = document.getElementById("n" + position);

  if (currentElement) {
    currentElement.classList.add("on");
  }

  // create an id for the next element
  position += 1;
}

function move() {
  // check if already an interval has been set up
  if (!intervalId) {
    console.log("start");
    intervalId = setInterval(change, speedMs);
  }
}
