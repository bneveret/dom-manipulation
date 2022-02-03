const input = document.querySelector('#favchap');
const button = document.querySelector('#add');
const list = document.querySelector('ul');
const deleteButton = document.querySelector('#deleteButton');

input.focus();

button.addEventListener('click', function() {
    let userInput = input.value;
    if (!userInput == ''){
        input.value ='';
        let li = document.createElement('li');
        let span = document.createElement('span');
        let button2 = document.createElement('button');
        button2.setAttribute('id','deleteButton');
        li.appendChild(span);
        li.appendChild(button2);
        span.textContent = userInput;
        button2.textContent = 'X';
        list.appendChild(li);
        input.focus();
    }
})

deleteButton.addEventListener('click', function() {
    deleteButton.parentElement.remove();

})