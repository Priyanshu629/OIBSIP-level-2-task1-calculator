let input=document.getElementById('input')

let buttons=document.querySelectorAll('button')

buttons.forEach(button => {

    button.onclick=()=>{

        if(button.innerHTML==='C'){
            input.value=input.value.toString().slice(0,-1)
        }
       else if(button.innerHTML==="AC"){
        input.value=''
       }
    
        else if(button.innerHTML==="="){
            
            let values=input.value
            let result=eval(values)
            input.value=result
        }
        else{
             input.value+=button.innerHTML
        }
        
        
    }
   
});
