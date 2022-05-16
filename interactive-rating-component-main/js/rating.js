const number = document.querySelector('.rating');
const submit = document.querySelector('.submit');
const question = document.querySelector('.question');
const result = document.querySelector('.result');
let selected = document.querySelector('.selected');
let chosen = '';

number.addEventListener('click', (e) => {
    lis = number.querySelectorAll('p');

    for (li of lis) {
        li.classList.remove('color');
    }
    if (e.target.classList.contains('number')) {
        chosen += e.target.innerHTML;
        e.target.classList.toggle('color');
    }
})

submit.addEventListener('click', (e) => {

    question.classList.add('result');
    selected.innerHTML += `You selected ${chosen} out of 5`;
    result.classList.add('show');

})