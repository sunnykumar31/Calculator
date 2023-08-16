
const screen=document.querySelector('input');
const buttons=document.querySelectorAll('button');
const list=document.querySelector('ol');
let prev;
let ar=[];
for(let btn of buttons){

    btn.addEventListener('click',(e)=>{

        const text=e.target.innerText;
        if(text==='C'){
            prev=ar.length;
            screen.value="";
        }

        else if(text==='x'){
            prev=ar.length;
            screen.value+='*';
        }

        else if(text==='='){

            try{
                const li=document.createElement('li');
                let t=screen.value;
                ar.push(t);
                prev=ar.length;
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
        else if(text==='Undo'){
            if(prev==0){
                alert("No Previous Operation is Available Now!!")
            }
            else{
                screen.value=ar[prev-1];
                prev--;
            }
            // screen.value=prev;
            
        }
        else {
            screen.value+=text;
        }
    })
}