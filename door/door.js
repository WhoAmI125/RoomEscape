var element = document.querySelector(".door");
var popup = document.querySelector(".backdoor");

// Get the modal
var modalAnswer = document.getElementById("answerModal");

// Get the button that opens the modal
var btnAnswer = document.getElementById("lockimg");

var span = document.getElementsByClassName("closeAnswer")[0];

span.onclick = function () {
  modalAnswer.style.display = "none";
}

btnAnswer.onclick = function () {
  modalAnswer.style.display = "block";
}

document.getElementsByClassName('backdoor').style.pointerEvents = 'none';

element.style.pointerEvents = 'none';



element.addEventListener("click", toggleDoor);


function unlock()
{
  if (document.getElementById('first').value=="o" && document.getElementById('second').value=="p" && document.getElementById('third').value=="e" 
      && document.getElementById('fourth').value=="n"   )
  {
    alert("Door Unlocked");
    element.addEventListener("click", toggleDoor);
    document.getElementById('lockimg').parentNode.removeChild(lockimg);
    document.getElementById("basedooradd").classList.add("zoom");
  }
  else
  {
    alert("Wrong Answer");
  }
}

function toggleDoor() {
  element.classList.toggle("doorOpen");
}