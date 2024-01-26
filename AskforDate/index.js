let yesButton = document.getElementById("yesButton")
let noButton = document.getElementById("noButton")
let popUp = document.getElementById("popup")
popUp.style.display = 'none'

yesButton.addEventListener("click",()=>{
    popUp.style.display = "block";
})

popUp.addEventListener("click",()=>{
    popUp.style.display = "none"
})


noButton.addEventListener("mouseover",()=>{
    noButton.style.position = "absolute"
    noButton.style.top = Math.random()*70 + "vh";
    noButton.style.left = Math.random()*70 + "vw";

})

