
let cpt = 0;


function createTodo(todoTxt){
        /*const divTodo = document.createElement('div');
        const CheckboxTodo = document.createElement('input');
        const labelTextTodo = document.createElement('label');
        const btCloseTodo = document.createElement('button');

        divTodo.className = 'todo';
        CheckboxTodo.type = 'checkbox';
        CheckboxTodo.id = 'checkbox';
        labelTextTodo.htmlFor = 'labelText';
        labelTextTodo.textContent = 'Lorem ipsum dolor sit amet.';
        btCloseTodo.className ='bt-close';
        btCloseTodo.innerHTML ='&times;';


        divTodo.appendChild(CheckboxTodo);
        divTodo.appendChild(labelTextTodo);
        divTodo.appendChild(btCloseTodo);*/

        const todoHTML = `
            <div class="todo">
                <input type="checkbox" id="checkbox-${cpt}" >
                <label for="checkbox-${cpt}">${todoTxt} </label>
                <button onclick="closeTodo(this.previousElementSibling.previousElementSibling,this.parentNode)" classe="bt-close"> &times; </button>
            </div>
        `;

        //document.querySelector('#todolist').appendChild(divTodo);
        document.querySelector('#todolist').innerHTML += todoHTML;
}

function checkValue(val){
    return val.length > 2;
}



function closeTodo(checkboxTag,todoTag){
    if(checkboxTag.checked){
       const response= window.confirm('Veux tu vraiment supprimer cette tâche?');
       if (!response) return; 
    }

    document.querySelector('#todolist').removeChild(todoTag);

}

document.forms.formAddTodo.addEventListener(
    'submit',
    function(e){
        e.preventDefault();
        if (checkValue(this.todoTxt.value)){
           createTodo(this.todoTxt.value); 
           cpt++;
        }
        else {
            const errorTxt = document.querySelector('.error');
            errorTxt.style.display = 'block';
            setTimeout(() =>{
                errorTxt.style.display = 'none';
            }, 2500);
        }
        
    }
);





