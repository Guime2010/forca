var nome1=""
var nome2=""
function addUser(){
    nome1=document.getElementById("player1").value 
    nome2=document.getElementById("player2").value
localStorage.setItem("nome1",nome1)
localStorage.setItem("nome2",nome2)
window.location="game.html"
}