

console.log('webpack starterkit');

let todoItems = [];

function updateUI(){
const container = document.querySelector('.list-group');
container.innerHTML = '';
todoItems.forEach( task => {
paintTask(task);
})
}


function paintTask(task){
const container = document.querySelector('.list-group');
const checked = task.isSelected ? 'checked' : '';
container.insertAdjacentHTML ('beforeend', `
<li class="list-item list-group-item ${checked}"> 
<input type="checkbox" ${checked} onchange="changeTask(event,${0})"/>
<span>${task.name}</span>
<div class="left">
<button class="btn btn-sm" onclick="deleteTask(${0})">${eliminar}</button>
</div>
</li>
 `);
}

function changeTask(event){
todoItems[0].isSelected = event.target.checked; 
updateUI();
}
function deleteTask(index){
todoItems.splice(index, 1);
updateUI();
}
function addTask(){
const input = document.querySelector('#input-task');
if(input.value == ''){
return;
}
  
const task = {
name : input.value,
isSelected: false
};
todoItems.push(task);
input.value = '';
updateUI();
}

const eliminar = `<svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
</svg>
`;

$(document).ready(function() {
    $('div').hover(
        function () {
            
            $(this).css({"background-color":"red"});
        }, 
        function () {
            
            $(this).css({"background-color":"blue"});
        }
    );
});