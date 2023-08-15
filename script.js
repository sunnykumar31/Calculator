
const screen=document.querySelector('input');
const buttons=document.querySelectorAll('button');
const list=document.querySelector('ol');

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
                const li=document.createElement('li');
                let t=screen.value;
                t+='=';
                screen.value=eval(screen.value);
                t+=screen.value;
                li.innerText=t;
                list.append(li);

                
            }
            catch{
                screen.value="Invalid Operation"
            }
        }
        else {
            screen.value+=text;
        }
    })
}