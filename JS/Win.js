let newgame=document.getElementById("newgame");
confetti();

function confetti(){
    for (let i = 0; i < 1000; i++) {
        const confetti=document.createElement('p');
        confetti.innerText="🤍"
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        const duration = Math.random() *1+5; 
        confetti.style.animationDuration = duration + 's'; 
        confetti.style.animationDelay = Math.random() * 10 + 's'; 
        confetti.style.animationName = 'fall'; 
        document.body.appendChild(confetti);
       
    }}

   
    setTimeout(() => {
        const confettis = document.querySelectorAll('.confetti');
        confettis.forEach(confetti => confetti.remove());
    }, 100000); 


newgame.addEventListener("click",function(){
    window.location.href = "../HTML/Game.html";
});

