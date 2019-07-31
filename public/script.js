console.log("PIKACHU IS IN");

//              BUTTON INPUT                       //

let quadrant1 = document.querySelector('#q1')

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
    q1.insertBefore(newDiv, quadrant1.childNodes[0]);
}

let collectNewInput = (event) => {
    alert('you clicked me!');
    let input1 = document.querySelector('.newTitle');
    let input2 = document.querySelector('.newDesc');
    let quadrantId = event.target.parentElement.parentElement.dataset.id;
    let dataObj = {
        title: input1.value,
        desc: input2.value,
        quadrant: quadrantId
    }
    doPostRequest( dataObj );
}

let doPostRequest = (dataObj) => {
    let request = new XMLHttpRequest();   // new HttpRequest instance
    let theUrl = "/todos/1/ajax";

    request.addEventListener("load", function() {
        let parsed = JSON.parse(this.responseText);
        let newDiv = document.createElement('div');
        let newCheckbox = document.createElement('input');
        newCheckbox.setAttribute('type', 'checkbox');
        let newLink = document.createElement('A');
        newLink.setAttribute('href', `/todos/${parsed[0].id}`);
        newLink.innerHTML = parsed[0].title;
        newDiv.appendChild(newCheckbox);
        newDiv.appendChild(newLink);
        q1.appendChild(newDiv);

    });

    request.open("POST", theUrl);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // this data below will be sent to index.js as request.body

    request.send(JSON.stringify(dataObj));
};






let collectInputUsingPost = (event) => {
    alert('you clicked meeeeeeeee');

    let inputTitle = document.querySelector('#input-title');
    let inputDesc = document.querySelector('#input-desc');

    let obj = {
        title: inputTitle.value,
        desc: inputDesc.value
    }

    doPostRequest( obj );
}

//              POST REQUEST AJAX                    //

// let doPostRequest = (input) => {
//     // let input = { "email": "hello@user.com", "response": { "name": "Tester" } };
//     let request = new XMLHttpRequest();   // new HttpRequest instance
//     let theUrl = "/quotes";

//     request.addEventListener("load", function() {
//         console.log('responsetext:', this.responseText);
//         let parsed = JSON.parse(this.responseText);
//         console.log('parsed:', parsed)

//         let newDiv = document.createElement('div');
//         newDiv.textContent = parsed.quotes.quote;
//         newDiv.textContent = input;
//         document.body.appendChild(newDiv);

//     });

//     request.open("POST", theUrl);
//     request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     // this data below will be sent to index.js as request.body
//     request.send(JSON.stringify({data:input}));
// };


//             GET REQUEST AJAX                    //
let doRequest = (userId) => {

  // what to do when we recieve the request
  let responseHandler = function () {
    console.log("response text", this.responseText);
    console.log("status text", this.statusText);
    console.log("status code", this.status);
  };

  // make a new request
  let request = new XMLHttpRequest();

  // listen for the request response
  request.addEventListener("load", responseHandler);

  // ready the system by calling open, and specifying the url
  // request.open("GET", "https://swapi.co/api/people/1");
  let url = `/quotes/${userId}`
  console.log('url:', url)
  request.open("GET", url);

  // send the request
  request.send();
};


//              SET ALL EVENT LISTENERS             //
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');

button1.addEventListener('click', showCreateForm);
button2.addEventListener('click', collectInputUsingPost);