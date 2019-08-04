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
//                        GOOGLE CHARTS                           //
//////////////////////////////////////////////////////////////////////////

let getData = () => {
    let request = new XMLHttpRequest();   // new HttpRequest instance
    let theUrl = `/statsAjax`;

    request.addEventListener("load", function() {
        // console.log(this.responseText);
        let result = JSON.parse(this.responseText);
        // console.log("result", result);

        let weekCreate = {
            day0 : 0,
            day1 : 0,
            day2 : 0,
            day3 : 0,
            day4 : 0,
            day5 : 0,
            day6 : 0
        }

        let weekComplete;

        let created = result.createdTodos;

        // 1. Use FirstDay as to set Day 0
        // 2. For every todo that has been created, loop through each one and check if (First Day + j) matches the day that the todo was created
        // 3. If yes, add a counter to the respective day in the object WeekCreate
        for (let i=0; i < created.results.length; i++) {
            let eachTodo = created.results[i].created_day;
            for (let j=0; j< 7; j++) {
                if (eachTodo === (j+parseInt(created.firstDay))) {
                    weekCreate[`day${j}`]++;
                    // console.log("weekCreate[`day${i}`]", weekCreate[`day${i}`]);
                }
            }
            // console.log("eachTodo", eachTodo);
            // console.log("(i+created.firstDay)", (i+parseInt(created.firstDay)));
        }
        // console.log('weeeeeekkkkkkkk: ',weekCreate);
        runGoogleCharts(weekCreate, weekComplete);
    });
    request.open("GET", theUrl);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send();
    console.log('in getDataaaaaaaa')
}

let runGoogleCharts = (weekCreate, weekComplete) => {

    // console.log('managed to enter google charts with dataObj!: ', dataObj)
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        console.log('draw chart running!');
        let data = google.visualization.arrayToDataTable([
          ['Day', 'Created', 'Completed'],
          ['Sun',  weekCreate.day0,      0],
          ['Mon',  weekCreate.day1,      1],
          ['Tue',  weekCreate.day2,       1],
          ['Wed',  weekCreate.day3,      4],
          ['Thu',  weekCreate.day4,      1],
          ['Fri',  weekCreate.day5,      2],
          ['Sat',  weekCreate.day6,      2],
        ]);

        let options = {
          title: 'Weekly Review',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };
        let chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
}

//////////////////////////////////////////////////////////////////////////
//                      SET EVENT LISTENERS                          //
//////////////////////////////////////////////////////////////////////////

let setEventListeners = () => {
    for (let i=0; i < 4; i++ ){
        if (document.querySelector('.addNewTaskButton')) {
            let button = document.querySelectorAll('.addNewTaskButton')[i];
            button.addEventListener('click', showCreateForm);
        }
        let bigList = document.querySelectorAll('.big-list')[i];
        bigList.addEventListener('click', toggleTodo);
    }
}

//////////////////////////////////////////////////////////////////////////

//                         ALL FUNCTIONS START HERE                     //

//             CONDITIONALS BASED ON WHAT PAGE USER IS ON               //

//////////////////////////////////////////////////////////////////////////
let windowURL = new URL(window.location.href);
let current = windowURL.pathname;
console.log("current", current);

if (current.includes('home')) {
    console.log(' in home!');
    setEventListeners();

} else if (current.includes('stats')){
    console.log(' in review!')
    // window.onload = getData;
    getData();
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////