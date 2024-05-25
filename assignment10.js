var operands = ['+', '-', '*', '/', '(', '^', '%', '.'];
function showAlert(text) {
    alert(text);
}

function getValue(val){
    var input = document.getElementById('display');
    var lastIndex = input.value.length-1;
    var lastChar = input.value[lastIndex];
    if(operands.includes(val) && operands.includes(lastChar)){
        if(val !== lastChar){
            var temp = input.value.split('');
            temp.splice(lastIndex, 1, val);
            input.value = temp.join('');
        }
    }
    else{
        input.value += val;
    }
}


function sum(){
    var input = document.getElementById('display');
    var lastChar = input.value[input.value.length-1];
    if(operands.includes(lastChar)){
        input.value = 'Invalid Expression';
    }
    else{
        var answer = eval(input.value);
        input.value = answer;
    }
}


function delChar(){
    var input = document.getElementById('display');
    var lastIndex = input.value.length-1;
    var number = input.value.slice(0,lastIndex)
    input.value = number;
}

function clearAll(){
    var input = document.getElementById('display');
    input.value = '';
}

function mySin(){
    var input = document.getElementById('display');
    input.value = Math.sin(input.value).toFixed(3);
}

function myCos(){
    var input = document.getElementById('display');
    input.value = Math.cos(input.value).toFixed(3);
}

function myTan(){
    var input = document.getElementById('display');
    input.value = Math.tan(input.value).toFixed(3);
}

function mySqrt(){
    var input = document.getElementById('display');
    input.value = Math.sqrt(input.value).toFixed(3);
}