class Сalculator{
    number;
    operation;
    rezult;
    equally;
    delete;

    st='';
    str='';
    num='';
    num1='';
    op='';

   /**/
    constructor(top,left){
        this.top=top;
        this.left=left;
        this.createСalculator();
        this.calculate();
        
    }
    createСalculator(){
     const content=document.querySelector('.content')   
     const  calc=document.createElement('div');
     const styleCalc=document.createElement('style');
     calc.classList.add('calculator')
     calc.innerHTML=`
     <div class="wrap">
     <div class="calc">
         <button class='btn btn-operation'id="btnC">c</button>
         <div class='display'>
            <input class='result' placeholder='0' type=text>
          </div>
 
            <button class='btn btn-number' >7</button>
            <button class='btn btn-number' >8</button>
            <button class='btn btn-number' >9</button> 
            <button class='btn btn-operation '>+</button>
 
            <button class='btn btn-number' >4</button>
            <button class='btn btn-number' >5</button>
            <button class='btn btn-number' >6</button> 
            <button class='btn btn-operation'i>-</button>
 
            <button class='btn btn-number' >1</button>
            <button class='btn btn-number' >2</button>
            <button class='btn btn-number' >3</button> 
            <button class='btn btn-operation'id="btnMul">/</button> 
 
              <button class='btn btn-number' >0</button>
              <button class='btn btn-number'  >.</button>
              <button class='btn '  id="btnEqually">=</button>  
              <button class='btn btn-operation'  >x</button>    
         </div>
     </div>
     `
     content.append(calc);
    // margin: 200px 40%;
//---------------------------------------------------------------------
     styleCalc.textContent=`
     .wrap{  
        width: 40vw;
        height: 36vh;
        background-color: rgb(119, 151, 219);
        position: absolute;
        top:${this.top}px;
        left:${this.left}px;
        
        box-shadow: 0px 5px 0px rgba(2, 3, 90, 0.25);
        
    }
    .calc{
        width: 38vw;
        height:34vh;
        background-color: rgb(119, 151, 219);
        margin-left: 1vw;
        margin-top: 1vh; 
         position: absolute;
        display: flex;
        flex-wrap: wrap;
        }
     .display{
        width: 28.1vw;
        height: 5.6vh;
        margin:0.3vh 0.2vw;
        
     }  
     .result{
        width: 100%;
        height: 100%;
        text-align: right;
        padding-right: 10px;
        background-color:rgb(26, 156, 207);
        border:1px rgb(26, 156, 207);
     } 
     ::placeholder {
      color: white;
      opacity: 1;
    }
    .btn{
        width: 9.1vw;
        height: 6.2vh;
        margin:0.2vh 0.2vw;
        border-radius: 6px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
        border: none;
    }
    #btnC{
        background-color: red;
    }
    #btnEqually{
      background-color:rgb(223, 238, 15);
    }
     `
     document.head.append(styleCalc);
     this.number=document.querySelectorAll('.btn-number');
     this.operation=document.querySelectorAll('.btn-operation');
      this.result=document.querySelector('.result');
      this.equally=document.getElementById('btnEqually');
      this.delete=document.getElementById('btnC');
    }

    calculate() {
        this.number.forEach((el)=>{
        el.addEventListener('click',(e)=>{ 
       this.num='';
      this. num+=e.target.textContent;
       this.st+=this.num;
       this.str+=this.num;
       this.result.placeholder=this.st;
       })
       })
       
       this.operation.forEach((el)=>{
          el.addEventListener('click',(e)=>{
          if(this.op===''&&this.num!=''){
            this.op=e.target.textContent;
            this.num1=this.str;
            this.str='';
          this.st=this.result.placeholder+=this.op;
          }
          })
         })
          
         this.equally.addEventListener('click',()=>{ 
         switch(this.op){
           case '+':
             this.result.placeholder=+this.num1+(+this.str);
             this.reset();
             break;
             case '-':
              this.result.placeholder=+this.num1-(+this.str);
              this.reset();
              break;
              case '/':
                this.result.placeholder=+this.num1/(+this.str);
                this.reset();
                break;
                case 'x':
                  this.result.placeholder=+this.num1*(+this.str);
                  this.reset();
                  break;
           
         }
       });

       
       this.delete.addEventListener('click',()=>{
        this.reset();
        this.result.placeholder='0'
       })
}
        reset(){
          this.st='';
          this.str='';
          this.num='';
          this.num1='';
          this.op='';
        }
    //  calculateWithOperation(num1,num2,op){
    //    this.result.placeholder=Number(this.num1)op(+this.str);
    // }
}
const calc=new Сalculator(200,200);
//calc.createСalculator();
//calc.calculate();