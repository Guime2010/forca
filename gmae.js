nome1=localStorage.getItem("nome1")
nome2=localStorage.getItem("nome2")
player1Score=0
player2Score=0
document.getElementById("player1Name").innerHTML=nome1+": "
document.getElementById("player2Name").innerHTML=nome2+": "

document.getElementById("player1Score").innerHTML=player1Score
document.getElementById("player2Score").innerHTML=player2Score

function send(){
    palavra=document.getElementById("word").value
    palavra=palavra.toLowerCase()
    
    retire1=palavra.charAt(1)
    
    retire2=Math.floor(palavra.length/2)
    retire2=palavra.charAt(retire2)
    
    retire3=palavra.charAt(palavra.length-2)

    
    remover1=palavra.replace(retire1,"_")
    remover2=remover1.replace(retire2,"_")
    remover3=remover2.replace(retire3,"_")

    question_word = "<h4 id='wordDisplay'>"+remover3+"</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  question_word + inputBox + checkButton ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    
}
turnoPergunta="player1";
turnoResposta="player2"
function check(){
  obterResposta=document.getElementById("inputCheckBox").value 
  obterResposta=obterResposta.toLowerCase()
  if(palavra==obterResposta){
    if(turnoResposta=="player1"){
        player1Score=player1Score+1
        console.log(player1Score)
        document.getElementById("player1Score").innerHTML=player1Score
    } 
        else {
       player2Score=player2Score+1
       document.getElementById("player2Score").innerHTML=player2Score
    }

  }
  if(turnoPergunta=="player1")
	{
		turnoPergunta="player2"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + nome2;
	}
	else 
	{
		turnoPergunta="player1"
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + nome1 ;
	}

	if(turnoResposta=="player1")
	{
		turnoResposta="player2"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + nome2 ;
	}
	else 
	{
		turnoResposta="player1"
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + nome1;
	}

    document.getElementById("output").innerHTML = "";
}
 
