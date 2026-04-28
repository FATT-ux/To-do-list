const btn = document.getElementById('btn');
const OutputText = document.getElementById('output-text');


btn.addEventListener('click', function(event){
    event.preventDefault();
    const text = document.getElementById('text-input').value;
    if (text == '') return; //проверка чтобы не было пустого поля
    // += это хначит добавляет новый элемент не удаляя старый
    OutputText.innerHTML += `<li> <input type='checkbox' class='input-checkbox'> ${text} <img src="./images/crossed.png" alt=""  class="img-crossed"> </li>`;
    // очистка поля ввода
    document.getElementById('text-input').value = '';
});

OutputText.addEventListener('click', function(event) {
    if (event.target.classList.contains('img-crossed')) {
        const li = event.target.closest('li');
        if (li) {
            li.remove();
        }
    }
});