let serverNameInput = document.getElementById('serverName');
let serverForm = document.getElementById('serverForm');

let serverTbody = document.querySelector('#serverTable tbody');

let allServers = {};

let serverId = 0;

serverForm.addEventListener('submit', submitServerInfo);


// create server object and add to allServers, update html and reset input
function submitServerInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event

  let serverName = serverNameInput.value;
   
  if (serverName.trim().length > 0) {
  // if (serverName !== '') {
    serverId++;
    allServers['server' + serverId] = { serverName };

    updateServerTable();

    serverNameInput.value = '';
  }
}

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
  
  serverTbody.innerHTML = '';

  for (let key in allServers) {
    let curServer = allServers[key];

    let newTr = document.createElement('tr');
    newTr.setAttribute('id', key);

    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;

    appendTd(newTr, curServer.serverName);
    appendTd(newTr, '$' + tipAverage.toFixed(2));
    appendDeleteBtn(newTr);

    serverTbody.append(newTr);
  }
}




//vvvvvvvvvvvvvvvvvvvvvvvv
// Remove Button Listener
//vvvvvvvvvvvvvvvvvvvvvvvv

const removeListener = function(e) {
  e.target.parentElement.remove();
}

// Add a server delete button
function appendDeleteBtn(tr) {

  const removeServerBtn = document.createElement("button");
  removeServerBtn.innerText = "X";
  removeServerBtn.addEventListener("click", removeServer);
  const removeServerTd = document.createElement("td");
  removeServerTd.appendChild(removeServerBtn);
  tr.appendChild(removeServerTd);
}

//vvvvvvvvvvvvvvvvvvvvvvvv
// Remove server Listener
//vvvvvvvvvvvvvvvvvvvvvvvv

const removeServer = function(e) { 
  
    let servId = (e.target.parentElement).parentElement.getAttribute('id');  
    delete allServers[servId];  
    updateServerTable();
}


