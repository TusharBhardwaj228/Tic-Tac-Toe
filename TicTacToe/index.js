const arr = [];
let turn = false;
let x=true;
let winLosee;
const turnNumber = document.querySelector('.js-turn');

document.querySelectorAll('.js-grid-item').forEach((item, index) => {
  item.addEventListener('click', ()=>{
    if((winLosee === undefined || !winLosee) && !item.innerHTML){   
      if(!turn){
        item.innerHTML='X';
        turnNumber.innerHTML = '0 turn';
        turn = true;
        arr[index]='X'       
      }
      else{
        item.innerHTML='0';
        turnNumber.innerHTML = 'X turn';
        turn = false;
        arr[index]='0';
      }
      winLosee = winLose();
      if(winLosee){
        document.querySelectorAll('.js-grid-item').forEach((item)=>{
          item.removeEventListener('click', ()=>{});
        });
      }
    }      
  });
}); 

function winLose() {
  if(arr.length >= 5){
    let winner;
    if((arr[0]!=='' && arr[1]!=='' && arr[2]!=='') && (arr[0]===arr[1] && arr[1]===arr[2])){
      winner = arr[0];
    } else if((arr[3]!=='' && arr[4]!=='' && arr[5]!=='') && (arr[3]===arr[4] && arr[4]===arr[5])){
      winner = arr[3];
    } else if((arr[6]!=='' && arr[7]!=='' && arr[8]!=='') && (arr[6]===arr[7] && arr[7]===arr[8])){
      winner = arr[6];
    } else if((arr[0]!=='' && arr[4]!=='' && arr[8]!=='') &&(arr[0]===arr[4] && arr[4]===arr[8])){
      winner = arr[0];
    } else if((arr[2]!=='' && arr[4]!=='' && arr[6]!=='') &&(arr[2]===arr[4] && arr[4]===arr[6])){
      winner = arr[2];
    } else if((arr[0]!=='' && arr[3]!=='' && arr[6]!=='') &&(arr[0]===arr[3] && arr[3]===arr[6])){
      winner = arr[0];
    } else if((arr[1]!=='' && arr[4]!=='' && arr[7]!=='') &&(arr[1]===arr[4] && arr[4]===arr[7])){
      winner = arr[1];
    } else if((arr[2]!=='' && arr[5]!=='' && arr[8]!=='') &&(arr[2]===arr[5] && arr[5]===arr[8])){
      winner = arr[2];
    }
    
    if (winner) {
      turnNumber.innerHTML='Player ' + winner + ' won';
      return true;
    }
  }
  return false;
}