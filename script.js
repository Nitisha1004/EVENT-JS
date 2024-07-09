let btn1 =  document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    console.log('button 1 was clicked - hndler 1');
    
});


btn1.addEventListener("click", () => {
    console.log('button 1 was clicked - handler 2')
})
 const handler3 = () => {
    console.log('button 1 was clicked - handler 3')
}
btn1.addEventListener("click", handler3);
btn1.removeEventListener("click", handler3);

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log('you are inside div');
};


//toggle button

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body")
let currmode = "light"
modebtn.addEventListener("click", () =>{
    if (currmode==="light"){
        currmode = "dark";
       body.classList.add("dark");
    }
    else{
        currmode = "light";
        body.classList.add("light");
    }
    console.log(currmode)
});