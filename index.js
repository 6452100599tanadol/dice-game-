alert('Refresh Me!')
const firstRandomNum = Math.floor(Math.random()*6)+1
const firstDiceImage = 'd' + firstRandomNum +'.png';
document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);

const secondRandomNum = Math.floor(Math.random()*6)+1
const secondDiceImage = 'd' + secondRandomNum +'.png';
document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);

if(firstRandomNum > secondRandomNum){
  document.querySelector('h1').innerHTML = 'The winner is User 1';
}else if(firstRandomNum < secondRandomNum){
  document.querySelector('h1').innerHTML = 'The winner is User 2';
}else{
  document.querySelector('h1').innerHTML = 'Draw!';
}
