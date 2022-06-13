let screen = document.getElementById('display');

let screenValue = '';

let a;

function func(a)
{
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


 