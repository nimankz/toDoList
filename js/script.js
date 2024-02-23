//declre elements
const clearbtn = document.getElementById('clear');
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const status={check:"fa-check-circle",uncheck:"fa-circle-thin",lineThrough:"lineThrough"};
const today= new Date();
const options={weekday:"long",month:"short",day:"numeric"};
let id=1;

//functions:
function init(){
    const elements=list.children;

    for(let item of elements){
        const elemntId=item.id;
        const circleOne=document.getElementById(`c${elemntId}`);
        circleOne.addEventListener("click",function (){
            doneUndo(elemntId);
        })
        const trashCan=document.getElementById(`t${elemntId}`);
        trashCan.addEventListener("click",function(){
            trash(elemntId);
        })

    }
}
// for adding new action
function addToDo(toDo,id){
    list.innerHTML+=`<li class="item" id=${id}>
                    <i class="fa fa-circle-thin circle co" id="c${id}" ></i>
                    <p class="text" id="p${id}">${toDo}</p>
                    <i class="fa fa-trash-o de" id="t${id}"  ></i>
                </li>`

    init();
}
//for add actions to circle
function doneUndo(id) {
    const myCircle = document.getElementById(`c${id}`);
    myCircle.classList.toggle(status.uncheck);
    myCircle.classList.toggle(status.check);
    const text = document.getElementById(`p${id}`);
    text.classList.toggle(status.lineThrough)
}
//for add actions to trash cans
function trash(id) {
    const element=document.getElementById(id.toString())
    element.remove()
}
//rests the content part
function clear() {
    list.innerHTML = '';
    id=0;
}

//actions:
dateElement.innerHTML=today.toLocaleDateString("en-US",options);
addBtn.addEventListener("click",function(event) {
    try {
        if(input.value===""){
            throw new Error("add a to-do part cannot be empty!\n please fill the input.");
        }
        else {
            addToDo(input.value,id)
            input.value="";
            id++;
        }
    }
    catch(error){
        alert(error.message);
    }

});
input.addEventListener("keyup", function(event) {
    if(event.key==="Enter"){
        try {
            if(input.value===""){
                throw new Error("add a to-do part cannot be empty!\n please fill the input.");
            }
            else {
                addToDo(input.value,id)
                input.value="";
                id++;
            }
        }
        catch(error){
            alert(error.message);
        }

    }
});
clearbtn.addEventListener("click", clear)
init();






