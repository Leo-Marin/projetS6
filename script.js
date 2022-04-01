let boutonChangeTest = document.getElementById('lebutton');
let boutonvalide = document.getElementById('valideid');

let battle = document.getElementById('field');
let corps = document.getElementById('main');
let champ1e = document.getElementById('1e_id');
let champ2e = document.getElementById('2e_id');
let champ3e = document.getElementById('3e_id');
let champ4e = document.getElementById('4e_id');
let champ5e = document.getElementById('5e_id');
let champ6e = document.getElementById('6e_id');

let reponse = ["A7","Anarchie","Deo favente","Julius","Rooftop","Julius 2"];

let reset = document.getElementById('bout_reset');

let departMinutes = 2;

let temps = departMinutes * 60;


boutonvalide.addEventListener("click", function (event) {
    verification();
});
reset.addEventListener("click", function (event){
    reinitialisation();
})

function verification(){
    let reponseBackup = reponse.slice();
    let verif = true;
    let compt = 0;
    let maxi = reponse.length;
    for (var i=0; i<maxi; i++){
        let txt="e_id";
        txt = i+1 + txt;
        console.log(txt + " is verified");
        let champi = document.getElementById(txt);
        champi.setAttribute("disabled","disabled");
        if (champi.value == ""){
            verif = false;
            champi.style.backgroundColor = "#ec7628";
        }
        else if(!reponseBackup.includes(champi.value)) {
            verif = false;
            champi.style.backgroundColor = "#d62e2e";
        }
        else{
            let pos = reponseBackup.indexOf(champi.value);
            reponseBackup.splice(pos,1);
            champi.style.backgroundColor = "green";
            compt+=1;
        }

    }
    clearInterval(idinter);
    battle.appendChild(creationbalise(compt,maxi));
}

function creationbalise(c,max){
    let oldscore = document.getElementById('score_id');
    if(oldscore != null){
        battle.removeChild(oldscore);
    }
    let score = document.createElement("p");
    score.setAttribute('id','score_id');
    score.setAttribute('class','txtcenter');
    let lescore = 0;
    if(120-temps<20){
        lescore=c*10;
    }
    else{
        let a1 = 120-(temps+1);
        console.log("le moins " + a1);
        let divv = (120+a1)/120;
        lescore = Math.trunc((c * 10)/divv);
        console.log("le div " + divv);
    }
    console.log("c" + c);
    if(lescore<0) lescore=0;
    score.innerText = 'SCORE : ' + lescore + '/' + '60';
    return score;
}

function reinitialisation(){
    let maxi = reponse.length;
    let score = document.getElementById('score_id');
    if(score != null){
        battle.removeChild(score);
    }
    for (var i=0; i<maxi; i++){
        let txt="e_id";
        txt = i+1 + txt;
        console.log(txt + " is clear");
        let champi = document.getElementById(txt);
        champi.value = null;
        champi.style.backgroundColor = "white";
    }
    champ1e.removeAttribute("disabled");
    champ2e.removeAttribute("disabled");
    champ3e.removeAttribute("disabled");
    champ4e.removeAttribute("disabled");
    champ5e.removeAttribute("disabled");
    champ6e.removeAttribute("disabled");
    temps=120;
    clearInterval(idinter);
    idinter = setInterval(diminuerTemps, 1000);
}


//-------------- TIMER KHEY ---------------


let timerElement = document.getElementById("timer");

function diminuerTemps() {
    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);
  
    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;
  
    timerElement.innerText = minutes + ":" + secondes;
    temps = temps - 1;
    console.log(temps);
    if(temps==-1){
        verification();
        

    }
    
  }


  let idinter = setInterval(diminuerTemps, 1000);

