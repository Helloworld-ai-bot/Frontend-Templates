
const screen = document.querySelector(".screen")
let distanceX = 0;
let distanceY = 0;
function mousemovement(e) {

    let rect = screen.getBoundingClientRect();

    let centerw = (rect.right + rect.left)/2 
    let centerh = (rect.top + rect.bottom)/2 

    let X = e.clientX
    let Y = e.clientY

    distanceX = centerw - X 
    distanceY = centerh - Y

    let height1 =Math.abs((rect.top - Y)/4)
    let opacity1 = Math.min(Math.abs(height1 -20)/100,1)

    console.log(height1)
   

    screen.style.transform = `rotateY(${(-distanceX/15)}deg) rotateX(${(+distanceY/10)}deg)`
    screen.style.backgroundColor = `rgba(0, 0, 0,${opacity1})`;

}


screen.addEventListener("mouseenter", () => {

    document.addEventListener("mousemove",mousemovement);
    
})


screen.addEventListener("mouseleave", () => {
    document.removeEventListener("mousemove",mousemovement)
    screen.style.transform = `rotateY(0deg) rotateX(0deg)`
    
})

