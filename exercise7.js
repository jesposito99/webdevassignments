function newTodo() {
    var userInput = document.getElementById('userInput').value;
    input.push(userInput);
};

var input = [];

function List() {
    var todolist = document.getElementById('todolist');
    todolist.innerHTML = '';
    

    for (var i = 0; i < input.length; i++)  {
        var li = document.createElement('li');
        var item = li.appendChild(document.createTextNode(input[i]));
        todolist.appendChild(li);
    };
};


document.querySelector('form').addEventListener("submit", function(event) {
    event.preventDefault();
    List();
    newTodo();
    
});