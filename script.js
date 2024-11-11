const run= ()=> {
let htmCode=document.querySelector('#html-code').value;
let cssCode=document.querySelector('#css-code').value;
let jsCode=document.querySelector('#js-code');
let output=document.querySelector('#output');
output.contentDocument.body.innerHTML=htmCode+"<style>"+cssCode+"</style>";
output.contentWindow.eval(jsCode.value);
}

function coldown(){
    document.querySelector("#one").style.color="red";
}
function colup(){
    document.querySelector("#one").style.color="black";
}