const input = document.querySelector('#favchap');
const button = document.querySelector('#add');
const list = document.querySelector('ul');

input.focus();

button.addEventListener('click', function() {
    let userInput = input.value;
    if (!userInput == ''){
        input.value ='';
        let li = document.createElement('li');
        let span = document.createElement('span');
        let button2 = document.createElement('button');
        li.appendChild(span);
        li.appendChild(button2);
        span.textContent = userInput;
        button2.textContent = 'X';
        list.appendChild(li);

        button2.onclick = function(e) {
            list.removeChild(li);
          }

        input.focus();
    }
});