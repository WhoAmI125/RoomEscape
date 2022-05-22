//Set the heart array
var lifeArray = new Array(5)
loadHeart();

// Get the button that opens the modal by button id
var btnSpeechBubble = document.getElementById("btnSpeechBubble");
var btnMonitor = document.getElementById("btnMonitor");
var btnCube = document.getElementById("btnCube");
var btnProjectorScreen = document.getElementById("btnProjectorScreen");
var btnJsLogo = document.getElementById("btnJsLogo");


// Get the modal by modal id
var modalSpeechBubble = document.getElementById("speechBubbleModal");
var modalMonitor = document.getElementById("monitorModal");
var modalCube = document.getElementById("cubeModal");
var modalProjectorScreen = document.getElementById("projectorScreenModal");
var modalJsLogo = document.getElementById("jsLogoModal");
var modalHeart = document.getElementById("gameOverModal");

var spanSpeechBubble = document.getElementsByClassName("close")[0];
var spanMonitor = document.getElementsByClassName("close")[1];
var spanCube = document.getElementsByClassName("close")[2];
var spanProjectorScreen = document.getElementsByClassName("close")[3];
var spanJsLogo = document.getElementsByClassName("close")[4];


// 버튼을 누를 때 modal 윈도우가 열림 
btnSpeechBubble.onclick = function () {
    modalSpeechBubble.style.display = "block";
}
btnMonitor.onclick = function () {
    modalMonitor.style.display = "block";
}
btnCube.onclick = function () {
    modalCube.style.display = "block";
}
btnProjectorScreen.onclick = function () {
    modalProjectorScreen.style.display = "block";
}
btnJsLogo.onclick = function () {
    modalJsLogo.style.display = "block";
}

// modal 닫는 버튼 누르면 modal 윈도우 닫히게 하는 함수

spanSpeechBubble.onclick = function () {
    modalSpeechBubble.style.display = "none";
}
spanMonitor.onclick = function () {
    modalMonitor.style.display = "none";
}
spanCube.onclick = function () {
    modalCube.style.display = "none";
}
spanProjectorScreen.onclick = function () {
    modalProjectorScreen.style.display = "none";
}
spanJsLogo.onclick = function () {
    modalJsLogo.style.display = "none";
}

// modal 윈도우 바깥 영역을 누르면 창이 닫히게 하는 함수
window.onclick = function (event) {
    if (event.target == modalSpeechBubble) {
        modalSpeechBubble.style.display = "none";
    }
    if (event.target == modalMonitor) {
        modalMonitor.style.display = "none"; //다른 모달 계속 추가.
    }
    if (event.target == modalCube) {
        modalCube.style.display = "none"; //다른 모달 계속 추가.
    }
    if (event.target == modalProjectorScreen) {
        modalProjectorScreen.style.display = "none"; //다른 모달 계속 추가.
    }
    if (event.target == modalJsLogo) {
        modalJsLogo.style.display = "none"; //다른 모달 계속 추가.
    }
}


function restart(){
    location.reload();
}



function unlockRoom3() {
    if (document.getElementById('first').value == "s" && document.getElementById('second').value == "a" && document.getElementById('third').value == "l"
        && document.getElementById('fourth').value == "a" && document.getElementById('fifth').value == "h") {
        element.addEventListener("click", toggleDoor);
        document.getElementById('lockimg').parentNode.removeChild(lockimg);
        alert("Door Unlocked");
        document.getElementById("basedooradd").classList.add("zoom");
        answerModal.style.display = "none";
    }
    else {
        alert("Wrong Answer");
    }
}


function speechBubbleWorker() { //speechbubble 문제 구현 함수.
    var amountCorrect = 0;
    var totalCorrect = 0;

    for (var i = 1; i <= 5; i++) {
        // i 는 radiobutton에 부여한 name 'group'+'i'.
        // i의 조건 범위는 문항 개수와 group'i' 따라 달라짐.
        var radios = document.getElementsByName('group' + i);
        // button에 부여한 name group1, group2... 에 따라 radiobutton 불러옴.

        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.value == "correct") {
                // radio button에 부여한 value가 correct 정답이면 총 정답 수 증가.

                totalCorrect++;
                if (radio.checked) {
                    // value가 correct인 radiobutton을 선택했으면 정답 문제 수도 추가.
                    amountCorrect++;
                }
            }

        }
    }

    if (amountCorrect == totalCorrect) { // 모든 문제를 맞추면 올바른 힌트.
        alert("Good job studying javascript! First letter is 's'.");

        document.getElementById("btnSpeechBubble").textContent = "Good job passing the first assignment... Look at the monitor next!";
        modalSpeechBubble.style.display = "none";

    }
    else {
        removeHeart();
        alert("Need to solve all the questions for the first hint."); // 그렇지 않으면 이상한 힌트를 제공.
        setTimeout(function(){ alert("Wrong answer. Left heart:"+lifeArray.length+". \nIf all 5 hearts are gone, game over!"); }, 300);
        document.getElementById("btnSpeechBubble").textContent = "You can't even do first question?... Disappointed!";
        totalCorrect = 0;
       
    }
}

// 딱 한번의 기회만 주어지는 클릭 함수.
function reply_click(clicked_id) {
    var answer = 3
    var choice = clicked_id
    if (answer == choice) { // 정답이면 방탈출 힌트 제공.
        alert("Correct, second letter is 'a'");
        document.getElementById("btnSpeechBubble").textContent = "Good job. Look at the cube next";
        modalMonitor.style.display = "none";

    }
    else { // 틀리면 페이지가 새로고침되어 다시 시작
        removeHeart();
        alert("Wrong, BAaang!");
        document.location.reload();
    }
}

// 자물쇠 형식.
function digitCheck() {
    if (document.getElementById('first').value == 1 && document.getElementById('second').value == 6 && document.getElementById('third').value == 0 && document.getElementById('fourth').value == 1) {
        alert("Good job, 힌트 제공");
    }
    else {
        removeHeart();
        alert("오답");
    }


}

function dontouch() {
    document.getElementById("btnSpeechBubble").textContent = "Do not click at me! I need sleep!";
}

function FillInTheBlank() {
    var totalCorrect = 11;
    var numberCorrect = 0;
    if (document.getElementById('blank1').value == 'replaceAll') {
        numberCorrect++;
    }
    if (document.getElementById('blank2').value == '==') {
        numberCorrect++;
    }
    if (document.getElementById('blank3').value == '===') {
        numberCorrect++;
    }
    if (document.getElementById('blank4').value == 'value') {
        numberCorrect++;
    }
    if (document.getElementById('blank5').value == 'value' || document.getElementById('blank5').value == 'type') {
        numberCorrect++;
    }
    if (document.getElementById('blank6').value == 'value' || document.getElementById('blank6').value == 'type') {
        numberCorrect++;
    }

    if (document.getElementById('blank7').value == 'key' || document.getElementById('blank7').value == 'value') {
        numberCorrect++;
    }
    if (document.getElementById('blank8').value == 'key' || document.getElementById('blank8').value == 'value') {
        numberCorrect++;
    }
    if (document.getElementById('blank9').value == 'package.json') {
        numberCorrect++;
    }


    if (numberCorrect == totalCorrect) {
        alert("Correct, the third letter is 'l'");
        document.getElementById("btnSpeechBubble").textContent = "Good... Check the projector screen";
        modalCube.style.display = "none";
    }
    else {
        removeHeart();
        let numberWrong = totalCorrect - numberCorrect;
        alert("Current wrong is " + numberWrong + ". Work Harder! \nOne heart discard. Left heart:"+lifeArray.length+". \nIf all 5 is gone, game over");
        document.getElementById("btnSpeechBubble").textContent = "You can't go!!!";
        totalCorrect = 0;
    }

}

function jsLogoWorker() {
    var amountCorrect = 0;

    var radios = document.getElementsByName('lastproblem1');

    for (var j = 0; j < radios.length; j++) {
        var radio = radios[j];

        if (radio.value == "correct" && radio.checked) {
            // radio button에 부여한 value가 correct 정답이면 총 정답 수 증가.
            amountCorrect++;

        }
    }

    if (amountCorrect == 1) {
        alert("Good job. Last letter was 'h'. Almost Done..!");
        document.getElementById("btnSpeechBubble").textContent = "Remember all 5 letters? Good bye!";
        modalJsLogo.style.display = "none";
    }
    else {
        removeHeart();
        alert("Wrong! start AGAIN!");
    }

}



function mcqCheck(){
    var amountCorrect = 0;
    var totalCorrect = 4;

    for (var i = 1; i <= 5; i++) {
        // i 는 radiobutton에 부여한 name 'group'+'i'.
        // i의 조건 범위는 문항 개수와 group'i' 따라 달라짐.
        var radios = document.getElementsByName('nodegroup' + i);
        // button에 부여한 name group1, group2... 에 따라 radiobutton 불러옴.

        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.value == "correct") {
                // radio button에 부여한 value가 correct 정답이면 총 정답 수 증가.

                totalCorrect++;
                if (radio.checked) {
                    // value가 correct인 radiobutton을 선택했으면 정답 문제 수도 추가.
                    amountCorrect++;
                }
            }
        }
    }


    if (amountCorrect == totalCorrect) {
        alert("Good job. the fourth letter was 'a'!");
        document.getElementById("btnSpeechBubble").textContent = "Check on the photo frame last!";
        modalProjectorScreen.style.display = "none";
    }
    else {
        removeHeart();
        alert("Need to answer all to get hint.\nLeft heart is:"+lifeArray.length+". \nGame over if all 5 hearts are gone!");
        document.getElementById("btnSpeechBubble").textContent = "Work harder...!!";
        totalCorrect = 0;

    }

}

function removeHeart()
{
    const element = document.getElementById("heart" + lifeArray.length);
    element.remove();
    lifeArray.pop();
    if (lifeArray.length == 0)
    {    
        lifeArray = new Array(5);
        document.location.assign("https://whoami125.github.io/RoomEscape/");
    }
    saveHeart();
}

function saveHeart()
{
    sessionStorage.setItem("lifeArray", JSON.stringify(lifeArray.length));
}

function loadHeart()
{
    let lastTasks = sessionStorage.getItem("lifeArray");
    if (!lastTasks) return;

    if(lastTasks === "4")
    {
        lifeArray.pop();
        const element = document.getElementById("heart" + 5);
        element.remove();
    }
    if(lastTasks === "3")
    {
        lifeArray.pop();
        lifeArray.pop();
        document.getElementById("heart" + 5).remove();
        document.getElementById("heart" + 4).remove();
    }
    if(lastTasks === "2")
    {
        lifeArray.pop();
        lifeArray.pop();
        lifeArray.pop();
        document.getElementById("heart" + 5).remove();
        document.getElementById("heart" + 4).remove();
        document.getElementById("heart" + 3).remove();
    }
    else if(lastTasks === "1")
    {
        document.getElementById("heart" + 5).remove();
        document.getElementById("heart" + 4).remove();
        document.getElementById("heart" + 3).remove();
        document.getElementById("heart" + 2).remove();
        lifeArray.pop();
        lifeArray.pop();
        lifeArray.pop();
        lifeArray.pop();
    }
}