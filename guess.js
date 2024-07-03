const check=document.querySelector('#check');
const Hint=document.getElementById('Hint');
const chance=document.getElementById('chance');
let x= Math.floor((Math.random())*100+1);
for(let i = 1 ; i<11 ; i++){
check.addEventListener('click',()=>{
    const input =document.querySelector('#input').value;
  
    if(input){

        if(input>x){
            Hint.innerHTML='Guessed Number is greater than the actual Number';
        }
        else if (input<x){
            Hint.innerHTML='Guessed Number  is Smaller than the actual Number';
        }
        else if (input==x){
            Hint.innerHTML='Congrats you have guessed right Number ';
        }
        i++;
    }
   
})}   