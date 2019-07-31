console.log("PIKACHU IS IN");

//              BUTTON INPUT                       //

let showCreateForm = (event) => {
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

let collectNewInput = (event) => {
    alert('you clicked me!');
    let input1 = document.querySelector('.newTitle');
    let input2 = document.querySelector('.newDesc');
    let quadrant = event.target.parentElement.parentElement;
    let dataObj = {
        title: input1.value,
        desc: input2.value,
        quadrant: quadrant.dataset.id
    }
    doPostRequest( dataObj, quadrant );
}

let doPostRequest = (dataObj, quadrant) => {

    let request = new XMLHttpRequest();   // new HttpRequest instance
    let theUrl = `/todos/${dataObj.quadrant}/ajax`;

    request.addEventListener("load", function() {
        let parsed = JSON.parse(this.responseText);
        let newDiv = document.createElement('div');
        let newCheckbox = document.createElement('input');
        newCheckbox.setAttribute('type', 'checkbox');
        newCheckbox.setAttribute('defaultValue', '1');
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

//              SET ALL EVENT LISTENERS             //
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');

button1.addEventListener('click', showCreateForm);
button2.addEventListener('click', showCreateForm);
button3.addEventListener('click', showCreateForm);
button4.addEventListener('click', showCreateForm);



// //             GET REQUEST AJAX                    //
// let doRequest = (userId) => {

//   // what to do when we recieve the request
//   let responseHandler = function () {
//     console.log("response text", this.responseText);
//     console.log("status text", this.statusText);
//     console.log("status code", this.status);
//   };

//   // make a new request
//   let request = new XMLHttpRequest();

//   // listen for the request response
//   request.addEventListener("load", responseHandler);

//   // ready the system by calling open, and specifying the url
//   // request.open("GET", "https://swapi.co/api/people/1");
//   let url = `/quotes/${userId}`
//   console.log('url:', url)
//   request.open("GET", url);

//   // send the request
//   request.send();
// };