document.onkeydown = (e) => {  
    e = e || window.event;  
    if (e.keyCode === 38) {  
      move_u();
    } else if (e.keyCode === 40) {  
      move_d();
    } else if (e.keyCode === 37) {  
      move_l();  
    } else if (e.keyCode === 39) {  
      move_r();
    }
    check_goal();
  }
let maze=[];
let maze_main=document.getElementById("maze_main");
let pos={
    y: 19,
    x: 1
};
let max;
let pl=document.getElementById("player");
/*
document.getElementById("up").addEventListener("click",function(){
    move_u();
});
document.getElementById("down").addEventListener("click",function(){
    move_d();
});
document.getElementById("left").addEventListener("click",function(){
    move_l();
});
document.getElementById("right").addEventListener("click",function(){
    move_r();
});
*/
function isWall(y,x){
    if(maze[y][x]===1) return true;
    return false;
}
function make_maze(){
    max=20;
    maze=[ // 미로 디자인 변경 가능 (1:벽 2:출발지점 3:도착지점 )
        [1,1,1,1,1, 3,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1],
        [1,0,0,0,1, 0,1,0,0,0, 1,0,0,0,0, 0,0,0,1,1],
        [1,0,1,1,1, 0,0,0,1,0, 1,1,1,1,1, 0,1,0,0,1],
        [1,0,0,0,1, 1,1,1,1,0, 1,0,0,0,1, 0,1,1,0,1],
        [1,0,1,0,0, 0,1,0,1,0, 0,0,1,0,1, 0,0,1,0,1],

        [1,0,1,1,1, 0,1,0,1,1, 1,1,1,0,1, 1,0,1,0,1],
        [1,0,0,0,1, 1,1,0,1,0, 0,0,0,0,1, 0,0,1,0,1],
        [1,1,1,0,0, 0,1,0,0,0, 1,0,1,1,1, 0,1,1,0,1],
        [1,0,0,0,1, 0,1,1,1,0, 1,0,0,0,0, 0,1,0,0,1],
        [1,0,1,0,1, 0,0,1,0,0, 1,0,1,1,0, 1,1,0,1,1],

        [1,0,1,0,1, 1,0,1,1,1, 1,1,1,0,0, 1,0,0,1,1],
        [1,1,1,1,1, 0,0,0,1,0, 0,0,1,1,1, 1,1,0,1,1],
        [1,0,0,0,1, 0,1,0,1,0, 1,0,1,0,0, 0,1,0,0,1],
        [1,0,1,0,0, 0,1,0,0,0, 1,0,1,0,1, 1,1,1,0,1],
        [1,0,1,1,1, 0,1,1,1,1, 1,0,1,0,1, 0,0,1,0,1],
        
        [1,0,1,0,1, 0,0,0,1,0, 0,0,0,0,1, 0,1,1,0,1],
        [1,0,0,0,1, 1,1,0,1,0, 1,1,1,1,1, 0,0,0,0,1],
        [1,1,1,0,1, 0,0,0,1,1, 1,0,0,0,1, 0,1,1,1,1],
        [1,0,0,0,1, 0,1,0,0,0, 0,0,1,0,0, 0,0,0,0,1],
        [1,2,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1],
    ];
}
function load_maze(){
    let tmp='';
    for(let i=0; i<max; i++){
//        let tmparr=[];
        tmp+=('<div class="row" id="row'+i+'">');
        for(let j=0; j<max; j++){
            if(isWall(i,j)) {
                tmp+=('<div class="col wall" id="ele'+i+'-'+j+'"></div>');
//                tmparr.push(1);
            }
            else {
//                tmparr.push(0);
                tmp+=('<div class="col path" id="ele'+i+'-'+j+'"></div>');
            }
        }
        tmp+=('</div>');
//        maze.push(tmparr);
    }
//    maze[max-1][max-1]=100;
    document.getElementById('maze_main').innerHTML=tmp;
    document.getElementById('ele'+pos.y+'-'+pos.x).classList.add("cur");
}

make_maze();
load_maze();

function checkBound(y,x){
    if(y>=max || x>=max || y<0 || x<0 || maze[y][x]==1){
        return false;
    }
    else{
        return true;
    }
}

function move_r(){
    if(!checkBound(pos.y,pos.x+1)) return;
    document.getElementById('ele'+pos.y+'-'+pos.x).classList.remove("cur");
    pos.x+=1;
    document.getElementById('ele'+pos.y+'-'+pos.x).classList.add("cur");
}
function move_l(){
    if(!checkBound(pos.y,pos.x-1)) return;
    document.getElementById('ele'+pos.y+'-'+pos.x).classList.remove("cur");
    pos.x-=1;
    document.getElementById('ele'+pos.y+'-'+pos.x).classList.add("cur");
}
function move_d(){
    if(!checkBound(pos.y+1,pos.x)) return;
    document.getElementById('ele'+pos.y+'-'+pos.x).classList.remove("cur")
    pos.y+=1;
    document.getElementById('ele'+pos.y+'-'+pos.x).classList.add("cur")
}
function move_u(){
    if(!checkBound(pos.y-1,pos.x)) return;
    document.getElementById('ele'+pos.y+'-'+pos.x).classList.remove("cur")
    pos.y-=1;
    document.getElementById('ele'+pos.y+'-'+pos.x).classList.add("cur")
}
function check_goal(){
    if(maze[pos.y][pos.x]===3){
        done();
    }
}
function done(){
    document.getElementById("popup_bg").style.display='block';
    document.getElementById("ending_text").style.display='block';   
}