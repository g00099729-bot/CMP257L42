
function rollDice(){

const numofdice=document.getElementById("numofdice").value;
let diceResult=document.getElementById("diceResult");
let diceImages=document.getElementById("diceImages");
const values=[];
const Images=[];

for(let i=0;i<numofdice;i++){

    const value=Math.floor(Math.random()*6)+1;
    values.push(value);
    Images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`)
}

diceResult.textContent=`dice:${values.join(', ')}`;
diceImages.innerHTML=Images.join(' ');

}