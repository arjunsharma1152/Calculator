let screen = document.getElementById('display');

let screenValue = '';

let button=document.querySelector('table');

button.addEventListener('click',func);

function func(e)
{
    var a=e.target.textContent;
    console.log(a);
         if (a == 'C') {
            screenValue = "";
            screen.innerHTML = screenValue;
        }
        else if (a == '=') {
            screen.innerHTML = eval(screenValue);
        }
        else {
            screenValue += a;
            screen.innerHTML = screenValue;
        }
}


 
