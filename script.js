const screen=document.querySelector('input');
const buttons=document.querySelectorAll('button');
for(let btn of buttons){
    btn.addEventListener('click',(e)=>{
        const text=e.target.innerText;
        if(text==='C'){
            screen.value="";
        }
        else if(text==='x'){
            screen.value+='*';
        }
        else if(text==='='){
            try{
                screen.value=eval(screen.value);
                
            }
            catch{
                screen.value="Invalid Operation"
            }
        }
        else screen.value+=text;
    })
}