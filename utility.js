function getInputValue(inputId){
    let inputValueId = document.getElementById(inputId);
    let inputValue = parseFloat(inputValueId.value);
    inputValueId.value = "";
    return inputValue;
}

function getInnterTextValueById(innerTextId){
    let innerTextElementId = document.getElementById(innerTextId);
    let innerTextElementValue = parseFloat(innerTextElementId.innerText);
    return innerTextElementValue;
}

function updateInnterText(innerTextId, newValue){
    let innerTextElementId = document.getElementById(innerTextId);
    innerTextElementId.innerText = newValue
}