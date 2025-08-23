  let tables=document.querySelectorAll("table");
 var trs=document.querySelectorAll("tr");
let instructions=document.getElementById("instructions");
let logo =document.querySelector("img");
let closei=document.getElementById("closei");
let newgame=document.getElementById("newgame");
let time=document.getElementById("timer");
let life=document.getElementById("life");

let audio = document.createElement('audio');


let color=["#FF0000","#FF0066","#FFFF00","#00B0F0","#0000ff","#800080","#24c110","#ffa500"];
let sumcolor=[0,0,0,0,0,0,0,0];
let count=[0,0,0,0,0,0,0,0,0,0,0];
var savefull=[0,0,0,0,0,0,0,0,0,0,0];
var build=[
["","","",""],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"]
];

var t1a,t2a,t3a,t4a;
let k=0;
let f=0;
let bool=false,loser=false;
let instruction=1;
var a=10,b=1;
var timer,timeLeft=90,timesave;
var cancel=0; 
var point=0; 
var ismove=0;

instructions.style.display="block";
time.style.display="none";
life.style.display="none";
newgame.style.display="none";

closei.addEventListener("click",function(){
    instructions.style.display='none';
    if(instruction===1){
   time.style.display="block";
   newgame.style.display="block";
   life.style.display="block";
    updateTimerDisplay();
    startTimer();
    start();
    instruction=0;
    }
    else{
        timeLeft=timesave;
    }
})

newgame.addEventListener("click",function(){
    if(point===3){
     lose();
    }
    else
    point++;
    deletepoint();
     newGame();
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'i') {
        event.preventDefault();
        instructions.style.display="block";
        instructions.classList.remove("modal");
        instructions.classList.add("modal2");
        timesave=timeLeft;

    }

    if (event.ctrlKey &&event.key=== 'z') {
        event.preventDefault();
        if(point===3){
            lose();
        }
        else if(cancel===0&&ismove===1){
            point++;
            cancel=1;
            deletepoint();
        cancelation(b,a);
        
    }

    }
    
    });

  tables[0].addEventListener("click",function(){
     click(1);
    })

    tables[1].addEventListener("click",function(){
        click(2);
    });

    tables[2].addEventListener("click",function(){
        click(3);
    })

    tables[3].addEventListener("click",function(){
        
            click(4);    
    })

    tables[4].addEventListener("click",function(){
        click(5);
    })

    tables[5].addEventListener("click",function(){
        click(6);
    })

    tables[6].addEventListener("click",function(){
        click(7);
    })

    tables[7].addEventListener("click",function(){
        click(8);
        
    })
    

    tables[8].addEventListener("click",function(){
        click(9);
      
    })

    tables[9].addEventListener("click",function(){
        click(10);
    })

     function start(){
        choosecolorandbuild();
        fill(trs[3],trs[2],trs[1],trs[0],1);
        fill(trs[7],trs[6],trs[5],trs[4],2);
        fill(trs[11],trs[10],trs[9],trs[8],3);
        fill(trs[15],trs[14],trs[13],trs[12],4);
        fill(trs[19],trs[18],trs[17],trs[16],5);
        fill(trs[23],trs[22],trs[21],trs[20],6);
        fill(trs[27],trs[26],trs[25],trs[24],7);
        fill(trs[31],trs[30],trs[29],trs[28],8);
        fill(trs[35],trs[34],trs[33],trs[32],9);
        fill(trs[39],trs[38],trs[37],trs[36],10);
        for(let i=1;i<11;i+=2){
          close(i,i+1);
        }
        for(let i=0;i<tables.length;i++){ 
            tables[i].classList.add("table"); 
           }
    }  

function choosecolorandbuild(){
   
    
     while(k<32){
    const j=Math.floor(Math.random()*8+2);
    const i=Math.floor(Math.random()*8);
    k=k+chek(j,i);
  
   }

}


function click(table){
    cancel=0;
    if(savefull[table]===0){
    tables[table-1].classList.remove("close");
    if(bool===false){
        a=table;
        t1a=trs[table*4-1];
        t2a=trs[table*4-2];
        t3a=trs[table*4-3];
        t4a=trs[table*4-4];
        bool=true;
    }
    else{
        b=table;
        bool=false;
        ismove=transfer(a,b);
        if(ismove===1){
        fill(t1a,t2a,t3a,t4a,a);
        fill(trs[table*4-1],trs[table*4-2],trs[table*4-3],trs[table*4-4],b);   
    }

    setTimeout(()=>{ close(a,b);},400);

        if(full(b)===1){
            audio.src = "../צלילים/correct-6033.mp3";
        audio.play(); 
            f++;
            savefull[b]=1;
            tables[b-1].style.background=build[b][0];
          }
        if(f===8){ 
            win(); 
        }}
        
      
       
    
    }
    
}


function chek(j,i){
    if(count[j]<4&&sumcolor[i]<4){
                           build[j][count[j]]=color[i];
                           count[j]++;
                           sumcolor[i]++;
                           return 1;
                       }
                       return 0;
}


function fill(t1,t2,t3,t4,i) {
    t1.style.backgroundColor =build[i][0];
    t2.style.backgroundColor = build[i][1];
    t3.style.backgroundColor = build[i][2];
    t4.style.backgroundColor = build[i][3];
}

function transfer(a,b){
    if(a===b)
        return 0;
    else
    if(count[a]>-1&&count[b]<4&&((build[a][count[a]-1]===build[b][count[b]-1])||count[b]===0)){

                            build[b][count[b]]=build[a][count[a]-1];
                            build[a][count[a]-1]="#00000000";
                            count[a]--;
                            count[b]++;
                            return 1;
                        }
                        return 0;
}

function full(b){


        if(build[b][0]===build[b][1]&&build[b][0]===build[b][2]&&build[b][0]===build[b][3]&&build[b][0]!="#00000000")

            return 1;
           
        return 0;

  
}
    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        time.textContent = 
            String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
    }

    function startTimer() {
            timer = setInterval(() => {   
                    timeLeft--;
                    updateTimerDisplay();
                    if (timeLeft <= 0) {
                        clearInterval(timer);
                        timer = null;
                       lose();
                    }
            }, 1000);
        } 
   
   function close(a,b){
           
        tables[a-1].classList.add("close");
    tables[b-1].classList.add("close");
    }

    function cancelation(a,b){
        if(savefull[a]===0&&savefull[b]===0){
        console.log(build.toString());
        build[b][count[b]]=build[a][count[a]-1];
        build[a][count[a]-1]="#00000000";
        count[a]--;
        count[b]++;
        console.log(build.toString());
        fill(trs[a*4-1],trs[a*4-2],trs[a*4-3],trs[a*4-4],a);
        fill(trs[b*4-1],trs[b*4-2],trs[b*4-3],trs[b*4-4],b);
    }}

function lose(){
    window.location.href = "../HTML/Lose.html";
}

function win(){
    window.location.href = "../HTML/Win.html";
    }

    
function newGame(){
    k=0;
sumcolor=[0,0,0,0,0,0,0,0];
count=[0,0,0,0,0,0,0,0,0,0,0];
savefull=[0,0,0,0,0,0,0,0,0,0,0];
 build=[
["","","",""],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"],
["#00000000","#00000000","#00000000","#00000000"]
];
for(let i=0;i<tables.length;i++){
    tables[i].style.background="#00000000";
}
timeLeft=90;
    start();
}


function deletepoint(){
    audio.src = "../צלילים/wrong-answer-126515.mp3";
    audio.play();
    switch(point){
        case 1:
            life.innerText="♥♥▫";
            break;

            case 2:
                life.innerText="♥▫▫";
                break;

                case 3:
                    life.innerText="▫▫▫";
                    break;   
    }
}
        
    
          








