console.log("PIKACHU IS IN");
//////////////////////////////////////////////////////////////////////////
//                              ADD TODO                             //
//////////////////////////////////////////////////////////////////////////
let toggleDropdown = (event) => {
    console.log('you clicked the body!')
    let tempDiv = document.querySelector('.temp-div');
    let parent = event.target.parentElement;
    let submitButton = document.querySelector('.newButton');
    let addTodoButton = document.querySelector('.addNewTaskButton');

    if (parent === tempDiv) {
        if (event.target === submitButton ) {
            tempDiv.parentElement.removeChild(tempDiv);
            for (let i=0; i < 4; i++ ){
            let button = document.querySelectorAll('.addNewTaskButton')[i];
                if (button.style.display !== 'inline-block') {
                    button.style.display = 'inline-block';
                }
            }
        }
    } else {
        tempDiv.parentElement.removeChild(tempDiv);
        document.body.onclick='';
        for (let i=0; i < 4; i++ ){
        let button = document.querySelectorAll('.addNewTaskButton')[i];
            if (button.style.display !== 'inline-block') {
                button.style.display = 'inline-block';
            }
        }
    }
}

let showCreateForm = (event) => {
    console.log('create form running')
    let newDiv = document.createElement('div');
        newDiv.classList.add('temp-div');
    let inputTitle = document.createElement('input');
        inputTitle.setAttribute('placeholder', 'title' );
        inputTitle.classList.add('newTitle');
    let inputDesc = document.createElement('input');
        inputDesc.setAttribute('placeholder', 'description');
        inputDesc.classList.add('newDesc');
    let newButton = document.createElement('button');
        newButton.textContent = 'Submit';
        newButton.classList.add('newButton');
        newButton.addEventListener('click', collectNewInput);

    newDiv.appendChild(inputTitle);
    newDiv.appendChild(inputDesc);
    newDiv.appendChild(newButton);
    let nextSibling = event.target.nextSibling;
    let parentDiv = event.target.parentElement;
        parentDiv.insertBefore(newDiv, nextSibling);

    event.target.style.display = 'none';

    setTimeout( () => {
        document.body.onclick = toggleDropdown;
    }, 500);
}

let collectNewInput = (event) => {
    let input1 = document.querySelector('.newTitle');
    let input2 = document.querySelector('.newDesc');
    let quadrant = event.target.parentElement.parentElement.parentElement.parentElement;
    let dataObj = {
        title: input1.value,
        desc: input2.value,
        quadrant: quadrant.dataset.id
    }
    addTodo( dataObj, quadrant );
    let parentDiv = event.target.parentElement;
    quadrant.removeChild(parentDiv);
}

let addTodo = (dataObj, quadrant) => {

    console.log('quadranntttt: ', quadrant)

    let request = new XMLHttpRequest();   // new HttpRequest instance
    let theUrl = `/todos/${dataObj.quadrant}/a-add`;

    request.addEventListener("load", function() {
        let parsed = JSON.parse(this.responseText);
        console.log(parsed);
        let newLi = document.createElement('li');
        let newCheckbox = document.createElement('input');
        newCheckbox.setAttribute('type', 'checkbox');
        newCheckbox.setAttribute('value', parsed[0].id);
        let newTag = document.createElement('A');
        newTag.classList.add('todos')
        newTag.setAttribute('href', `/todos/${parsed[0].id}`);
        newTag.innerHTML = parsed[0].title;
        newLi.appendChild(newCheckbox);
        newLi.appendChild(newTag);
        quadrant.lastChild.appendChild(newLi);
    });
    request.open("POST", theUrl);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(dataObj));
};

//////////////////////////////////////////////////////////////////////////
//                              EDIT TODO                             //
//////////////////////////////////////////////////////////////////////////

let showEditForm = (event) => {
    let newDiv = document.createElement('div');
    let inputTitle = document.createElement('input');
    inputTitle.setAttribute('placeholder', 'title' );
    inputTitle.classList.add('newTitle');
    let inputDesc = document.createElement('input');
    inputDesc.setAttribute('placeholder', 'description');
    inputDesc.classList.add('newDesc');
    let newButton = document.createElement('button');
    newButton.textContent = 'Submit';
    newButton.classList.add('newButton');
    newButton.addEventListener('click', collectNewInput);
    newDiv.appendChild(inputTitle);
    newDiv.appendChild(inputDesc);
    newDiv.appendChild(newButton);
    let parentDiv = event.target.parentElement;
    parentDiv.insertBefore(newDiv, parentDiv.childNodes[0]);
}

let collectEditedInput = (event) => {
    alert('you clicked me!');
    let input1 = document.querySelector('.newTitle');
    let input2 = document.querySelector('.newDesc');
    let quadrant = event.target.parentElement.parentElement;
    let dataObj = {
        title: input1.value,
        desc: input2.value,
        quadrant: quadrant.dataset.id
    }
    editTodo( dataObj, quadrant );

    // let parentDiv = event.target.parentElement;
    // quadrant.removeChild(parentDiv);
}

let editTodo = (dataObj, quadrant) => {

    let request = new XMLHttpRequest();   // new HttpRequest instance
    let theUrl = `/todos/${dataObj.quadrant}/ajax`;

    request.addEventListener("load", function() {
        let parsed = JSON.parse(this.responseText);
        let newDiv = document.createElement('div');
        let newCheckbox = document.createElement('input');
        newCheckbox.setAttribute('type', 'checkbox');
        newCheckbox.setAttribute('defaultValue', '1');
        newCheckbox.addEventListener('click', toggleTodoCheck); //on checked
        let newLink = document.createElement('A');
        newLink.setAttribute('href', `/todos/${parsed[0].id}`);
        newLink.innerHTML = parsed[0].title;
        newDiv.appendChild(newCheckbox);
        newDiv.appendChild(newLink);
        quadrant.appendChild(newDiv);
    });
    request.open("POST", theUrl);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(dataObj));
};

//////////////////////////////////////////////////////////////////////////
//                              DELETE TODO                             //
//////////////////////////////////////////////////////////////////////////

let checkDelete = (event) => {
    // let targetElement = event.target.nextSibling //element after event.target which is
    console.log("targetElement", targetElement);
    deleteTodo();
}

let deleteTodo = (dataObj, quadrant) => {

    let request = new XMLHttpRequest();   // new HttpRequest instance
    let theUrl = `/todos/${dataObj.quadrant}/ajax`;

    request.addEventListener("load", function() {
        let parsed = JSON.parse(this.responseText);
        let newDiv = document.createElement('div');
        let newCheckbox = document.createElement('input');
        newCheckbox.setAttribute('type', 'checkbox');
        newCheckbox.setAttribute('defaultValue', '1');
        newCheckbox.addEventListener('click', toggleTodoCheck); //on checked
        let newLink = document.createElement('A');
        newLink.setAttribute('href', `/todos/${parsed[0].id}`);
        newLink.innerHTML = parsed[0].title;
        newDiv.appendChild(newCheckbox);
        newDiv.appendChild(newLink);
        quadrant.appendChild(newDiv);
    });
    request.open("DELETE", theUrl);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(dataObj));
};

//////////////////////////////////////////////////////////////////////////
//                        TOGGLE TODO COMPLETED                         //
//////////////////////////////////////////////////////////////////////////
let timer;

let toggleTodo = (event) => {
    let next = event.target.nextSibling;
    let quadrant = event.target.parentElement.parentElement.parentElement;
    let dataObj = {
        quadrant: quadrant.dataset.id,
        todoId: event.target.value
    }
    if (event.target.checked === true) {
        // alert('correct!')
        next.classList.add('todos-completed');
    } else {
        // alert('wrong')
        next.classList.remove('todos-completed');
    }
    checkTodo(dataObj, event);
}

let checkTodo = (dataObj, event) => {
    let request = new XMLHttpRequest();   // new HttpRequest instance
    let theUrl = `/todos/${dataObj.quadrant}/a-check?_method=PUT`;

    request.addEventListener("load", function() {
        let windowURL = new URL(window.location.href);
        let searchParams = windowURL.searchParams.get('display');
        let result = JSON.parse(this.responseText);

        if (searchParams === 'completed') {
            if (!result.completed) {
                let list = event.target.parentElement;
                let tag = event.target.nextSibling;
                console.log('tagggggggg: ', tag);
                tag.classList.add('todos')
                timer = setTimeout( () => {
                    list.style.display = 'none';
                }, 500);
            } else {
                clearTimeout(timer);
            }
        } else {
            if (result.completed) {
                let list = event.target.parentElement;
                timer = setTimeout( () => {
                    list.style.display = 'none';
                }, 500);
            } else {
                clearTimeout(timer);
            }
        }
    });
    request.open("POST", theUrl);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(dataObj));
}

//////////////////////////////////////////////////////////////////////////
//                        SET EVENT LISTENERS                           //
//////////////////////////////////////////////////////////////////////////

for (let i=0; i < 4; i++ ){
    if (document.querySelector('.addNewTaskButton')) {
        let button = document.querySelectorAll('.addNewTaskButton')[i];
        button.addEventListener('click', showCreateForm);
    }
    let bigList = document.querySelectorAll('.big-list')[i];
    bigList.addEventListener('click', toggleTodo);
}

//////////////////////////////////////////////////////////////////////////
//                        FUNCTIONS ON HTML FILE                           //
//////////////////////////////////////////////////////////////////////////

let logout = () => {
    let logout = document.querySelector('#logout');
    logout.submit();
}

//////////////////////////////////////////////////////////////////////////