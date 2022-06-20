console.log("calculator working");

let buffer = 0,operation;

let display = document.getElementById("display");


display.value="";
/*
document.getElementById("key-7").onclick = appendText(7);
document.getElementById("key-8").onclick = appendText(8);
document.getElementById("key-9").onclick = appendText(9);
document.getElementById("key-4").onclick = appendText(4);
document.getElementById("key-5").onclick = appendText(5);
document.getElementById("key-6").onclick = appendText(6);
document.getElementById("key-1").onclick = appendText(1);
document.getElementById("key-2").onclick = appendText(2);
document.getElementById("key-3").onclick = appendText(3);
document.getElementById("key-0").onclick = appendText(0);
document.getElementById("key-.").onclick = appendText(".");
*/
document.getElementById("key-7").onclick = () => {
    appendText(7);
}
document.getElementById("key-8").onclick = () => {
    appendText(8);
}
document.getElementById("key-9").onclick = () => {
    appendText(9);
}
document.getElementById("key-4").onclick = () => {
    appendText(4);
}
document.getElementById("key-5").onclick = () => {
    appendText(5);
}
document.getElementById("key-6").onclick = () => {
    appendText(6);
}
document.getElementById("key-1").onclick = () => {
    appendText(1);
}
document.getElementById("key-2").onclick = () => {
    appendText(2);
}
document.getElementById("key-3").onclick = () => {
    appendText(3);
}
document.getElementById("key-0").onclick = () => {
    appendText(0)
}
document.getElementById("key-.").onclick = () => {
    appendText(".")
}
document.getElementById("key-clear").onclick = () => {
    display.value = "";
    buffer = 0;
}

document.getElementById("key-%").onclick = () => {
    buffer = parseFloat(display.value) / 100;
    display.value = buffer;
}

document.getElementById("key-p").onclick = () => {
    if(display.value != null)
    {
        buffer = parseFloat(display.value);
        //equals();
    }
    operation = '+';
    console.log(operation);
    display.value = "";
}
document.getElementById("key--").onclick = () => {
    if(display.value != null)
    {
        buffer = parseFloat(display.value);
       // equals();
    }
    operation = '-';
    console.log(operation);
    display.value = "";
}
document.getElementById("key-*").onclick = () => {
    if(display.value != null)
    {
        buffer = parseFloat(display.value);
        //equals();
    }
    operation = '*';
    console.log(operation);
    display.value = "";
}
document.getElementById("key-/").onclick = () => {
    if(display.value != null)
    {
        buffer = parseFloat(display.value);
        //equals();
    }
    operation = '/';
    console.log(operation);
    display.value = "";
}

document.getElementById("key-eq").onclick = ()=>{
    equals();
};

function appendText(key) {
    console.log(key);
    display.value = display.value + key;
}

function equals(){
    console.log("calling equal");
    switch (operation) {
        case '+':
            display.value = parseFloat(buffer) + parseFloat(display.value);
            buffer = display.value;
            break;
        case '-':
            display.value = parseFloat(buffer) - parseFloat(display.value);
            buffer = display.value;
            break;
        case '*':
            display.value = parseFloat(buffer) * parseFloat(display.value);
            buffer = display.value;
            break;
        case '/':
            display.value = parseFloat(buffer) / parseFloat(display.value);
            buffer = display.value;
            break;
    
        default:
            buffer = display.value;
            break;
    }
    if(display.value == Infinity || display.value == NaN)
    {
        display.value = "ERROR!"
    }
    //display.value = ""
}

