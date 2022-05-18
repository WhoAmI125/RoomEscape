// Get the modal by modal id
var modalMountain = document.getElementById("mountainModal");
// myModal에 자신이 생성한 modal id 작성

// Get the button that opens the modal by button id
var btnMountain = document.getElementById("btnMountain");
// myBtn에 자신이 생성한 button id 작성

// Get the <span> element that closes the modal
var spanAnswer = document.getElementsByClassName("close")[0];
var spanMountain = document.getElementsByClassName("close")[1];
// getElementsByClassName은 nodelist를 리턴하기에, 
// 만약 한 페이지에 다른 방탈출 문제 modal 윈도우 ui를 생성하고 닫기 버튼을 추가하고 싶으면,
// document.getElementSbyClassName("close")[3]; ... 이런식으로 해야 합니다.



// 버튼을 누를 때 modal 윈도우가 열림
btnMountain.onclick = function () {
            modalMountain.style.display = "block";
        }
// btn은 위에 var btn 말하는 것.


// modal 닫는 버튼 누르면 modal 윈도우 닫히게 하는 함수
spanAnswer.onclick = function () {
    modalMountain.style.display = "none";
}

spanMountain.onclick = function () {
    modalMountain.style.display = "none";
}
// span은 위에 var span 말하는 것


// modal 윈도우 바깥 영역을 누르면 창이 닫히게 하는 함수
window.onclick = function (event) {
    if (event.target == modalMountain) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none"; //다른 모달 계속 추가.
    }      
} 

// 딱 한번의 기회만 주어지는 클릭 함수.
function reply_click(clicked_id) {
    var answer="mountain1";
    var choice=clicked_id
    if (answer==choice){ // 정답이면 방탈출 힌트 제공.
        alert("Correct, hint to door: O");
    }
    else{ // 틀리면 페이지가 새로고침되어 다시 시작
        alert("Wrong Answer");
        document.location.reload();
    }
 }
