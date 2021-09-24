var btnTranslate= document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
var serverurl= "https://api.funtranslations.com/translate/doge.json";


function getTranslation(text){
    return serverurl+ "?text="+text;
}

function errorHandler(error){
    console.log("ERROR OCCURED"+ error);
}
function clickHandler(){
    //outputDiv.innerText=txtInput.value;
    var inputText=txtInput.value;;
    fetch(getTranslation(inputText)).then(response=>response.json()).then(json=>outputDiv.innerText=(json.contents.translated)).catch(errorHandler);
};

btnTranslate.addEventListener("click",clickHandler);


