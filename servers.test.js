describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = '';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    serverNameInput.value = 'Alice';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  
  it('should not add a new server if nothing was entered in server name', function () {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);    
  });
  // server name is only white space/s

  it('should not add a new server if server name has only white space/s', function () {
    serverNameInput.value = '  ';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('function appendDeleteBtn() should add a "remove server" button to a given "tr" element', function () {
    let trEl = document.createElement('tr');
    appendDeleteBtn(trEl);
    expect(trEl.getElementsByTagName("button")).toBeDefined();
  });

  
  // ---------
  afterEach(function() {
    serverTbody.innerHTML = '';
    allServers = {};
    allPayments = {};
  });
});


