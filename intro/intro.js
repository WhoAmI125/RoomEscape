let idx=0;
// story
const story=['Where am I?','I can\'t remember...','What is this place?','What is this?','\"You are kidnapped because you didn\'t paid attention in Open-Source Software class.\"','\"You must solve the quiz to escape.\"','\"Or you will be locked up here and get a low grade...\"', '\"Good Luck!\"','I must get out of here!'];
const changeLen1=2;
const changeLen2=3;
const changeLen3=8;
const storyLen=9;

document.querySelector('#intro_text').addEventListener("click",story_continue);
window.onload=starting();

function starting(){
//
    set_screensize();
    eye_opening();
}
function set_screensize(){
    let w=window.innerWidth;
    let h=window.innerHeight;
//    console.log(w,h);
    if(w>1400) document.getElementsByClassName("baseRoom")[0].style.minWidth=w+'px';
    if(h>700) document.getElementsByClassName("baseRoom")[0].style.minHeight=h+'px';
}
function sleep(time) {
    if(time<=0) return;
    return new Promise((r) => setTimeout(r, time));
}
async function eye_opening(){
    await sleep(1000);
    document.getElementsByClassName("eye")[0].classList.add("eye_open");
    document.getElementsByClassName("eye")[1].classList.add("eye_open");
}
function story_continue(){
    if(idx===changeLen1){
        document.getElementsByClassName('intro')[0].style.visibility='hidden';
        document.getElementsByClassName('eye')[0].style.display='none';
        document.getElementsByClassName('eye')[1].style.display='none';
    }
    else if(idx===changeLen2){
        document.getElementsByClassName('intro_notes')[0].style.visibility='visible';
    }
    else if(idx===changeLen3){
        document.getElementsByClassName('intro_notes')[0].style.display='none';
        document.getElementById('scene2').style.display='none';
    }
    else if(idx===storyLen){
        document.getElementById('popup_bg').style.display='none';
        document.getElementById('intro_text').style.display='none';        
        return;
    }
    document.getElementById('intro_txtContents').innerHTML=story[idx];
    idx++;
}