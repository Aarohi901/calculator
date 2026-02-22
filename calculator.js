let btn=document.querySelectorAll("button");
let display=document.querySelector("input");
btn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.innerText=='C'|| btn.innerText=='CE')
        {
            display.value="";
        }
        else if (btn.classList.contains("erase")) {
    deleteLast();
}

        else if(btn.innerText=="="){
             calculate();
            
        }
        else{
            display.value+=btn.innerText;
        }
       
    });
});
function calculate(){
     try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}