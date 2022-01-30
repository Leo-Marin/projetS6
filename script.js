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
    let verif = true;
    let compt = 0;
    let maxi = reponse.length;
    for (var i=0; i<reponse.length; i++){
        let txt="e_id";
        txt = i+1 + txt;
        console.log(txt);
        let champi = document.getElementById(txt);

        if (champi.value == null || champi.value != reponse[i]) {
            verif = false;
        }
        else{
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