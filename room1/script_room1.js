let mod1 = document.querySelectorAll(".mod1");
let mod2 = document.querySelectorAll(".mod2");
let mod3 = document.querySelectorAll(".mod3");

let clmod = document.querySelectorAll(".close");

let modal1=document.getElementsByClassName("modal1")[0];
let modal2=document.getElementsByClassName("modal2")[0];
let modal3=document.getElementsByClassName("modal3")[0];

let question2Ans="";
let question2Hint=["Answer, hint: e","Answer, hint: l"];
let question2HintIdx=0;

let question3Ans="";
let question3Hint=["Answer, hint: l","Answer, hint: o"];
let question3HintIdx=0;

let lifeArray=new Array(3);
saveHeart();

mod1.forEach( (m) => {
    m.addEventListener("click", function () {
        modal1.style.display = "block";
    });
} );
mod2.forEach( (m) => {
    m.addEventListener("click", function () {
        modal2.style.display = "block";
    });
} );
mod3.forEach( (m) => {
    m.addEventListener("click", function () {
        modal3.style.display = "block";
    });
} );
clmod.forEach( (c)=> {
    c.addEventListener("click", function(){
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
    });
});

window.onclick = function (event) {
    if(event.target== modal1)
        modal1.style.display="none";
    if(event.target== modal2)
        modal2.style.display="none";
    if(event.target== modal3)
        modal3.style.display="none";
};
document.getElementById("quiz1").addEventListener("click", function(){
    document.getElementById("question1-1").innerHTML="Which command is required to change staged file to unmodified file?";
    document.getElementById("ans1-1-1").value="wrong";
    document.getElementById("at1-1-1").innerHTML=" git restore --staged &lt;file\>";
    document.getElementById("ans1-1-2").value="wrong";
    document.getElementById("at1-1-2").innerHTML=" git add &lt;file\>";
    document.getElementById("ans1-1-3").value="correct";
    document.getElementById("at1-1-3").innerHTML=" git commit";
    
    document.getElementById("question1-2").innerHTML="To remove the file from repo but keep it locally, use ___ and git commit.";
    
    document.getElementById("ans1-2-1").value="wrong";
    document.getElementById("at1-2-1").innerHTML=" git rm &lt;file\>";
    document.getElementById("ans1-2-2").value="correct";
    document.getElementById("at1-2-2").innerHTML=" git rm --cached &lt;file\>";
    document.getElementById("ans1-2-3").value="wrong";
    document.getElementById("at1-2-3").innerHTML=" git restore &lt;file\>";
});
document.getElementById("quiz2").addEventListener("click", function(){
    document.getElementById("question2").innerHTML="Which command is required to create new branch and switch to new branch at once?"
    question2Ans="ans2-2";
    question2HintIdx=0;
    document.getElementById("at2-1").innerHTML="git branch &lt;new_branch\>";
    document.getElementById("at2-2").innerHTML="git checkout -b &lt;new_branch\>";
    document.getElementById("at2-3").innerHTML="git checkout &lt;new_branch\>";
});
document.getElementById("quiz3").addEventListener("click", function(){
    document.getElementById("question2").innerHTML="Choose the wrong sentence."
    question2Ans="ans2-3";
    question2HintIdx=1;
    document.getElementById("at2-1").innerHTML="\"git diff\" shows changes in the working tree not yet staged for the next commit.";
    document.getElementById("at2-2").innerHTML="\"git diff --cached\" shows changes between the index and your last commit.";
    document.getElementById("at2-3").innerHTML="\"git diff HEAD\" shows changes in the staged area since your last commit.";
});
document.getElementById("quiz4").addEventListener("click",function(){
    document.getElementById("ans3").value="";
    document.getElementById("question3").innerHTML="Command \"___\" shows URLs of remote repositories when listing your current remote connections."
    question3Ans="git remote -v";
    question3HintIdx=0;
});
document.getElementById("quiz5").addEventListener("click",function(){
    document.getElementById("ans3").value="";
    document.getElementById("question3").innerHTML="If you want to push a specific branch named \"branch0\" to remote repository origin, command ___."
    question3Ans="git push origin branch0";
    question3HintIdx=1;
});

function digitCheck(){
    if (document.getElementById('ans3').value===question3Ans ){
        alert(question3Hint[question3HintIdx]);
    }
     else{
        alert("Try again...");
        //life -;
        removeHeart();
     }
}
function reply_click(clicked_id) {
    let choice=clicked_id;
    if (question2Ans==choice){ // 정답이면 방탈출 힌트 제공.
        alert(question2Hint[question2HintIdx]);
    }
    else{
        alert("Try again...");
        // life -;
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
        alert("Answer, hint: h");
        totalCorrect=0;
    }
    else{
        alert("Try again..."); // 그렇지 않으면 이상한 힌트를 제공. 
        totalCorrect=0;
        removeHeart();
    }
}
function unlock_room1()
{
  if (document.getElementById('first').value=="h" && document.getElementById('second').value=="e" && document.getElementById('third').value=="l" 
      && document.getElementById('fourth').value=="l"  && document.getElementById('fifth').value=="o" )
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