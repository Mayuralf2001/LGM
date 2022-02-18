let addbutton = document.getElementById('add');
let input = document.getElementById('input');
let todo = document.getElementById('toDocontainer');

addbutton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerHTML = input.value;
    todo.appendChild(paragraph)
    input.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function() {
        todo.removeChild(paragraph);
    })
})