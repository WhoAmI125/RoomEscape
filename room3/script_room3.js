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


// heart bar js파트 구현하기-틀리면 목숨 날아가고 3개 다 지워지면 게임 오버 modal window 띄움. 
var lifeArray = new Array(3)

function restart(){
    location.reload();
}



function unlockRoom3() {
    if (document.getElementById('first').value == "s" && document.getElementById('second').value == "a" && document.getElementById('third').value == "l"
        && document.getElementById('fourth').value == "a" && document.getElementById('fifth').value == "h") {
        element.addEventListener("click", toggleDoor);
        document.getElementById('lockimg').parentNode.removeChild(lockimg);
        alert("Door Unlocked");
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
        alert("학생은 js 기본기가 있네요! 첫번재 글자는 s입니다.");

        document.getElementById("btnSpeechBubble").textContent = "첫번째 과제를 가볍게 통과했군... 다음은 모니터를 조사해봐!";
        modalSpeechBubble.style.display = "none";

    }
    else {
        alert("모든 문제를 맞춰야 자물쇠 첫번재 글자 힌트를 얻을 수 있습니다."); // 그렇지 않으면 이상한 힌트를 제공.
        alert("틀리셨으니 하트 한 개 차감합니다. 남은 하트:"+lifeArray.length+"개. \n 하트 3개가 모두 차감되면 게임 오버");
        const element = document.getElementById("heart" + lifeArray.length);
        element.remove();
        lifeArray.pop();
        if (lifeArray.length==0) {
            
            modalHeart.style.display = "block";
            modalSpeechBubble.style.display="none";
            
        }else{
            document.getElementById("btnSpeechBubble").textContent = "첫번째 과제도 못한다니.. 실망이야!";
        }
        totalCorrect = 0;
       
    }
}

// 딱 한번의 기회만 주어지는 클릭 함수.
function reply_click(clicked_id) {
    var answer = 3
    var choice = clicked_id
    if (answer == choice) { // 정답이면 방탈출 힌트 제공.
        alert("정답, 두번째 글자는 a입니다");
        document.getElementById("btnSpeechBubble").textContent = "간단한 건 알고 있구만.. 옆에 큐브를 조사해봐";
        modalMonitor.style.display = "none";

    }
    else { // 틀리면 페이지가 새로고침되어 다시 시작
        alert("오답, 빵야!");
        document.location.reload();
    }
}

// 자물쇠 형식.
function digitCheck() {
    if (document.getElementById('first').value == 1 && document.getElementById('second').value == 6 && document.getElementById('third').value == 0 && document.getElementById('fourth').value == 1) {
        alert("정답, 힌트 제공");
    }
    else {
        alert("오답");
    }


}

function dontouch() {
    document.getElementById("btnSpeechBubble").textContent = "클릭해서 조교를 귀찮게 하지 마라!";
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
        alert("정답, 세번째 글자는 long의 l입니다");
        document.getElementById("btnSpeechBubble").textContent = "제법이네요 학생.. 프로젝터 스크린을 조사해봐";
        modalCube.style.display = "none";
    }
    else {
        let numberWrong = totalCorrect - numberCorrect;
        alert("현재 틀린 개수는 " + numberWrong + "입니다. 분발하세요. \n 틀리셨으니 하트 한 개 차감합니다. 남은 하트:"+lifeArray.length+"개. \n 하트 3개가 모두 차감되면 게임 오버");

        const element = document.getElementById("heart" + lifeArray.length);
        element.remove();
        lifeArray.pop();
        if (lifeArray.length==0) {
            
            modalHeart.style.display = "block";
            modalCube.style.display="none";
            
        }else{
            document.getElementById("btnSpeechBubble").textContent = "넌 못 지나간다!";
        }
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
        alert("정답입니다. 마지막 글자는 h였습니다. 거의 끝이에요..!");
        document.getElementById("btnSpeechBubble").textContent = "5가지 글자들 기억하지? 잘 가!";
        modalJsLogo.style.display = "none";
    }
    else {
        alert("땡! 처음부터 다시하세요");
        document.location.reload();
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
        alert("정답입니다. 네번째 글자는 a였습니다.!");
        document.getElementById("btnSpeechBubble").textContent = "마지막으로 액자를 조사해봐! 화이팅이다 ";
        modalProjectorScreen.style.display = "none";
    }
    else {
        alert("모든 문제를 맞춰야 자물쇠 첫번재 글자 힌트를 얻을 수 있습니다.\n 틀리셨으니 하트 한 개 차감합니다. 남은 하트:"+lifeArray.length+"개. \n 하트 3개가 모두 차감되면 게임 오버");
        const element = document.getElementById("heart" + lifeArray.length);
        element.remove();
        lifeArray.pop();
        if (lifeArray.length==0) {
            
            modalHeart.style.display = "block";
            modalProjectorScreen.style.display="none";
        }else{
            document.getElementById("btnSpeechBubble").textContent = "좀만 더 잘해봐...!!";
        }
        totalCorrect = 0;

    }

}



