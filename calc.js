let st='';
let str='';
let num='';
let num1='';
let op='';

const number=document.querySelectorAll('.btn-number');
const operation=document.querySelectorAll('.btn-operation');
const result=document.querySelector('.result');
const equally=document.getElementById('btnEqually');
//------------------------------------------------------------
   number.forEach((el)=>{
 el.addEventListener('click',(e)=>{ 
num='';
num+=e.target.textContent;
st+=num;
str+=num;
result.placeholder=st;
})
})

operation.forEach((el)=>{
   el.addEventListener('click',(e)=>{
   if(op===''&&num!=''){
     op=e.target.textContent;
     num1=str;
     str='';
   st=result.placeholder+=op;
   }
   })
  })
  

  equally.addEventListener('click',calculation);
function calculation(){

   console.log('op',op)
  switch(op){
    case '+':
      result.placeholder=+num1+(+str);;
      break;
      case '-':
       result.placeholder=+num1-(+str);;
       break;
       case '/':
         result.placeholder=+num1/(+str);;
         break;
         case 'x':
           result.placeholder=+num1*(+str);;
           break;
  }
}



 
