//Set the heart array
var lifeArray = new Array(3)
loadHeart();

// Get the modal by modal id
var modalMountain = document.getElementById("mountainModal");
var modalBook = document.getElementById("bookModal");
var modalVault = document.getElementById("vaultModal");
var modalLaptop = document.getElementById("laptopModal");
var modalBag = document.getElementById("bagModal");
var modalTrash = document.getElementById("trashModal");

// Get the button that opens the modal by button id
var btnMountain = document.getElementById("btnMountain");
var btnBook = document.getElementById("btnBook");
var btnVault = document.getElementById("btnVault");
var btnLaptop = document.getElementById("btnLaptop");
var btnBag = document.getElementById("btnBag");
var btnTrash = document.getElementById("btnTrash");

// Get the <span> element that closes the modal
var spanAnswer = document.getElementsByClassName("close")[0];
var spanMountain = document.getElementsByClassName("close")[1];
var spanBook = document.getElementsByClassName("close")[2];
var spanVault = document.getElementsByClassName("close")[3];
var spanLaptop = document.getElementsByClassName("close")[4];
var spanBag = document.getElementsByClassName("close")[5];
var spanTrash = document.getElementsByClassName("close")[6];


// 버튼을 누를 때 modal 윈도우가 열림
btnMountain.onclick = function () {
            modalMountain.style.display = "block";
};

btnBook.onclick = function () {
    modalBook.style.display = "block";
};

btnVault.onclick = function () {
    modalVault.style.display = "block";
};

btnLaptop.onclick = function () {
    modalLaptop.style.display = "block";
};

btnBag.onclick = function () {
    modalBag.style.display = "block";
};

btnTrash.onclick = function () {
    modalTrash.style.display = "block";
};


// modal 닫는 버튼 누르면 modal 윈도우 닫히게 하는 함수
spanAnswer.onclick = function () {
    modalMountain.style.display = "none";
};

spanMountain.onclick = function () {
    modalBook.style.display = "none";
    modalMountain.style.display = "none";
};

spanBook.onclick = function () {
    modalBook.style.display = "none";
    modalMountain.style.display = "none";
    modalVault.style.display = "none";
};

spanVault.onclick = function () {
    modalBook.style.display = "none";
    modalMountain.style.display = "none";
    modalVault.style.display = "none";
    modalLaptop.style.display = "none";
};

spanLaptop.onclick = function () {
    modalBook.style.display = "none";
    modalMountain.style.display = "none";
    modalVault.style.display = "none";
    modalLaptop.style.display = "none";
    modalBag.style.display = "none";
};

spanBag.onclick = function () {
    modalBook.style.display = "none";
    modalMountain.style.display = "none";
    modalVault.style.display = "none";
    modalLaptop.style.display = "none";
    modalBag.style.display = "none";
    modalTrash.style.display = "none";
};


// modal 윈도우 바깥 영역을 누르면 창이 닫히게 하는 함수
window.onclick = function (event) {
    if (event.target == modalMountain) {
        modalMountain.style.display = "none";
    }
    if (event.target == modalBook) {
        modalBook.style.display = "none"; //다른 모달 계속 추가.
    }     
    if (event.target == modalVault) {
        modalVault.style.display = "none"; //다른 모달 계속 추가.
    }
    if (event.target == modalLaptop) {
        modalLaptop.style.display = "none"; //다른 모달 계속 추가.
    }
    if (event.target == modalLaptop) {
        modalBag.style.display = "none"; //다른 모달 계속 추가.
    }
    if (event.target == modalLaptop) {
        modalTrash.style.display = "none"; //다른 모달 계속 추가.
    }
} 

// Removed the one chance
function reply_click(clicked_id) {
    var answer="mountain1";
    var choice=clicked_id
    if (answer==choice){ // 정답이면 방탈출 힌트 제공.
        alert("Correct, hint to door: u");
    }
    else{ // 틀리면 페이지가 새로고침되어 다시 시작
        alert("Wrong Answer");
        removeHeart();
    }
}

function reply_clickva(clicked_id) {
    var answer="vault3";
    var choice=clicked_id
    if (answer==choice){ // 정답이면 방탈출 힌트 제공.
        alert("Correct, hint to door: t");
    }
    else{ // 틀리면 페이지가 새로고침되어 다시 시작
        alert("Wrong Answer");
        removeHeart();
    }
}

function reply_clickla(clicked_id) {
    var answer="laptop4";
    var choice=clicked_id
    if (answer==choice){ // 정답이면 방탈출 힌트 제공.
        alert("Correct, hint to door: s");
    }
    else{ // 틀리면 페이지가 새로고침되어 다시 시작
        alert("Wrong Answer");
        removeHeart();
    }
}

function handleClick() {
    var amountCorrect = 0;
    var totalCorrect=0;

    for (var i = 1; i <= 2; i++) { 
    // i 는 radiobutton에 부여한 name 'group'+'i'.
    // i의 조건 범위는 문항 개수와 group'i' 따라 달라짐.
        var radios = document.getElementsByName('group' + i); 
    // button에 부여한 name group1, group2... 에 따라 radiobutton 불러옴.
        
        for (var j = 0; j < radios.length; j++) { 
            var radio = radios[j];
            if(radio.value=="correct"){ 
    // radio button에 부여한 value가 correct 정답이면 총 정답 수 증가.

                totalCorrect++;
                if(radio.checked){
    // value가 correct인 radiobutton을 선택했으면 정답 문제 수도 추가.
                    amountCorrect++;
                }
            }
        
        }
    }
    if(amountCorrect==totalCorrect){ // 모든 문제를 맞추면 올바른 힌트.
        alert("Correct, hint to door: d");
        totalCorrect=0;
    }
    else{
        alert("One or more is wrong"); // 그렇지 않으면 이상한 힌트를 제공. 
        totalCorrect=0;
        removeHeart();
    }
}

function checktextbag() {
    const inputtext = document.getElementById("textAnswer").value;
    if (inputtext.includes('zindex'))
    { 
        alert("Correct, hint to door: i");
    }
    else if (inputtext.includes('z-index'))
    { 
        alert("Correct, hint to door: i");
    }
    else
    { 
        removeHeart();
        alert("Wrong Answer, hint: problem with index");
        inputtext = " ";
    }
}

function trashcheck() {
    var raidoAnswer = document.getElementById("trashAnswer1");
    if(raidoAnswer.checked)
    { 
        alert("Correct, hint to door: o");
    }
    else{
        alert("Wrong answer");
        removeHeart();
    }
}

function unlockroom2()
{
  if (document.getElementById('first').value=="s" && document.getElementById('second').value=="t" && document.getElementById('third').value=="u" 
      && document.getElementById('fourth').value=="d"  && document.getElementById('fifth').value=="i"  && document.getElementById('sixth').value=="o")
  {
    alert("Door Unlocked");
    element.addEventListener("click", toggleDoor);
    document.getElementById('lockimg').parentNode.removeChild(lockimg);
    document.getElementById("basedooradd").classList.add("zoom");
  }
  else
  {
    alert("Wrong Answer");
    removeHeart();
  }
}

function removeHeart()
{
    const element = document.getElementById("heart" + lifeArray.length);
    element.remove();
    lifeArray.pop();
    if (lifeArray.length == 0)
    {
            
        lifeArray = new Array(3)
        document.location.reload();
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

    if(lastTasks === "2")
    {
        lifeArray.pop();
        const element = document.getElementById("heart" + 3);
        element.remove();
    }
    else if(lastTasks === "1")
    {
        document.getElementById("heart" + 3).remove();
        document.getElementById("heart" + 2).remove();
        lifeArray.pop();
        lifeArray.pop();
    }
}