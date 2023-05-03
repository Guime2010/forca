nome1=localStorage.getItem("nome1")
nome2=localStorage.getItem("nome2")
player1score=0
player2score=0
document.getElementById("player1Name").innerHTML=nome1+": "
document.getElementById("player2Name").innerHTML=nome2+": "

document.getElementById("player1Score").innerHTML=player1Score
document.getElementById("player2Score").innerHTML=player2Score

function send(){
    palavra=document.getElementById("word").value
    palavra=palavra.toLowerCase()
    retire1=palavra.charAt(1)
    retire2=Math.floor(palavra.length/2)
    retire3=palavra.length-1
    remover1=palavra.replace(retire1,"_")
    remover2=remover1.replace(retire2,"_")
    remover3=remover2.replace(retire3,"_")

question_word = "<h4 id='wordDisplay'> P. "+remover3+"</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  question_word + inputBox + checkButton ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
    
}
pergunta="player1";
resposta="player2"
function check(){
  obterresposta=document.getElementById("inputCheckBox") 
  obterresposta=obterresposta.toLowerCase()
  if(palavra==obterresposta){
    if(resposta=="player1"){
        player1Score=player1Score+1
        document.getElementById("player1Score").innerHTML=player1Score
    } 
        else {
       player2score=player2Score+1
       document.getElementById("player1Score").innerHTML=player2Score
    }
  }
}
 