let boutonChangeTest = document.getElementById('lebutton');
let boutonvalide = document.getElementById('valideid');

let corps = document.getElementById('main');
let champ1e = document.getElementById('1e_id');
let champ2e = document.getElementById('2e_id');
let champ3e = document.getElementById('3e_id');
let champ4e = document.getElementById('4e_id');
let champ5e = document.getElementById('5e_id');

let reponse = ["A7","Anarchie","Deo favente","Julius","Rooftop","Julius 2"];

boutonvalide.addEventListener("click", function (event) {
    verification();
});

function verification(){
    let reponseBackup = reponse.slice();
    let verif = true;
    let compt = 0;
    let maxi = reponse.length;
    for (var i=0; i<maxi; i++){
        let txt="e_id";
        txt = i+1 + txt;
        console.log(txt);
        let champi = document.getElementById(txt);

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
    corps.appendChild(creationbalise(compt,maxi));
}

function creationbalise(c,max){
    let oldscore = document.getElementById('score_id');
    if(oldscore != null){
        corps.removeChild(oldscore);
    }
    let score = document.createElement("p");
    score.setAttribute('id','score_id');
    score.innerText = 'score : ' + c + '/' + max;
    return score;
}