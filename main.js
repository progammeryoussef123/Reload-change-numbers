let icon =  document.querySelectorAll(".num");
let inter = 5000;
icon.forEach((valueDisplay) =>{
    let start = 0;
    let end = parseInt(valueDisplay.getAttribute("data-value"));
    let durition = Math.floor(inter / end);
    let counter = setInterval(function(){
        start += 1;
        valueDisplay.textContent = start;
        if(start == end){
            clearInterval(counter);
        }
    },durition)    
})