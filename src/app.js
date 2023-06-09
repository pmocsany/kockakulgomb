const doc = {
    sideInput: document.querySelector('#side'),
    radiusInput: document.querySelector('#radius'),
    calcButton: document.querySelector('#calcButton')
}
const state = {
    side: null,
    radius:null
}

window.addEventListener('load', () => {
    init()
})

function init(){
    onClickCalcButton()
}

function onClickCalcButton(){
    if(doc.calcButton){
        doc.calcButton.addEventListener('click', () =>{
        startCalc()
    })
}
}

function startCalc(){
    let sideStr = doc.sideInput.value
    if(checkInput(sideStr)){
        state.side = Number(sideStr)
        state.radius = calcRadius(state.side)
        render()
    }else {
            alert('Hiba! Az input nem megfelelő!')
    }
    
}
function checkInput(input){
    let inputStr = String(input)
    if (inputStr.match(/[0-9.]+/)){
        return true
    }else {
        return false
    }
    }


function calcRadius(side){
    let radius = Math.sqrt(3* side)/2;
    return radius;
}
function render(){
    doc.radiusInput.value= state.radius
}