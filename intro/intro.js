let idx=0;
// story
const story=['What is this?','Where am I?','You are kidnapped.','You must solve the quiz and go out of these rooms.'];
const changeLen=2;
const storyLen=4;

document.querySelector('#intro_text').addEventListener("click",story_continue);
window.onload=starting();

function starting(){
//
    eye_opening();
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
    if(idx==changeLen){
        document.getElementById('popup_bg').style.display='none';
    }
    if(idx===storyLen){
        document.getElementById('intro_text').style.display='none';        
        return;
    }
    document.getElementById('intro_txtContents').innerHTML=story[idx];
    idx++;
}