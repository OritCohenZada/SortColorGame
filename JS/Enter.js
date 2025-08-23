let login = document.getElementById("login");
let signup = document.getElementById("signup");

let form1=document.getElementById("form1");
let form2=document.getElementById("form2");

let divlogin=document.getElementById("divlogin");
let divsignup=document.getElementById("divsignup");

let password=document.getElementById("password");
let chekn = document.getElementById("chekn");
let chekp = document.getElementById("chekp");
let name = document.getElementById("name");
let email = document.getElementById("email");
let name1 = document.getElementById("name2");
let email1 = document.getElementById("email2");

const corectpassword=/[A-z]{1,}[0-9]{1,}/;

let bn=false,bp=false;
divlogin.style.display='block';

class User {
    constructor(name, email) {
        this.name = name;
        this.email=email;
    }
}


 let users=JSON.parse(localStorage.getItem("users"));

 if(!users)
    users=[];

 let i = localStorage.getItem('index');

 
 login.addEventListener("click", ()=>{
     let userFound = false;
     for (let j = 0; j < users.length; j++) {
        if (users[j].name === name.value && users[j].email === email.value&&name.value!=""&&email.value!="") {
             userFound = true;     
         }
     }
    if (userFound) {
         form1.action="./HTML/Game.html"
        // window.open("./HTML/Game.html");
        
    } else if(name.value!=""&&email.value!=""){
      divlogin.remove();
      divsignup.style.display='block';
         email1.value=email.value;
   
     }
 });

 signup.addEventListener("click", ()=>{
    user1=new User(name1.value,email1.value);
    users.push(user1);
    localStorage.setItem('users', JSON.stringify(users));
    i++;
    localStorage.setItem('index', i);
      form2.action="./HTML/Game.html"
    // window.open("./HTML/Game.html");
});

password.addEventListener("change",goodpassword);
name1.addEventListener("change",goodname);

const massage1=document.createElement("p");
chekp.appendChild(massage1);

const massage2=document.createElement("p");
  chekn.appendChild(massage2);

function goodpassword(){
   let p=password.value;
  
     if(!(corectpassword.test(p))&&(!bp)){
        bp=true;
       massage1.innerText="You need to enter a password with at least one English letter and three numbers"
       massage1.style.color="write"
       login.disabled = true;
  }
    else {
      login.disabled = false;
          massage1.innerText=""
       
    }

    
}

function goodname(){
  let b=false;
    for (let j = 0; j < users.length; j++) {
        if (users[j].name === name1.value) {
            b=true; 
         }}
         if(b&&!bn){
           bn=true;
         massage2.innerText="The name is already taken by another user, please enter another name"
         massage2.style.color="write"
         signup.disabled = true;
    }
else{
   signup.disabled = false;
      massage2.innerText=""
}
     
 
     
 }











