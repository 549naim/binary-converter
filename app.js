const result=document.getElementById('result');
const convert=document.getElementById('btn');
const clear1=document.getElementById('clear')

function binary(e){
    e.preventDefault();

    const number=document.getElementById('input').value;
    if (number <0){
        alert('Please enter a positive number')
    }
    if(number===''){
        alert('Please enter a number')
    }
    
    const binary_number=Number(number).toString(2);
    result.innerHTML=binary_number;
    
}


convert.addEventListener('click',binary);

function clear(){
    result.innerHTML=''  
}
clear1.addEventListener('click',clear)
