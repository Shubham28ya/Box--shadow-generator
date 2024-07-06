const element=document.querySelector("#element")
const input= document.querySelectorAll(".sliders input")
let code=document.querySelector("#code")
input.forEach((inp)=>{
    inp.addEventListener('input',radiusGenerator)
})

function radiusGenerator(){
    let allCorner=document.querySelector("#All-Corner").value
    let topLeft=document.querySelector("#Top-Left").value
    let topRight=document.querySelector("#Top-Right").value
    let bottomLeft=document.querySelector("#Bottom-Left").value
    let bottomRight=document.querySelector('#Bottom-Right').value
    let borderWidth=document.querySelector("#Border_width").value
    let color=document.querySelector("#shadow-color").value

if(allCorner>0){
    
    topLeft = allCorner
    topRight = allCorner
    bottomLeft = allCorner
    bottomRight = allCorner
}
let  borderRadius=` ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`


   

    
    element.style.borderRadius=borderRadius 
    let borderW=`${borderWidth}px solid ${HextoRgba(color)}`
    element.style.border=borderW
    code.textContent=` Border-radius: ${borderRadius} \n Border-Width: ${borderW}  `

    
}
function HextoRgba(color){
    let r=parseInt(color.substr(1,2),16)
    let g=parseInt(color.substr(3,2),16)
    let b=parseInt(color.substr(5,2),16)
return `rgb(${r}, ${g} ,${b})`
}


function copyCode() {
    code.select();
    document.execCommand("copy");
    alert("Code Copied To Clipboard");
  }

window.onload=radiusGenerator()