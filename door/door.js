var element = document.querySelector(".door");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}