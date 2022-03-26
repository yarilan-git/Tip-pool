describe("Payments tests", function() {   
    beforeEach(function() {
        // clear the bill input form and the payments object
        tipAmtInput.value = '';
        billAmtInput.value = '';
        allPayments = {};      
    });
    

    it('function submitPaymentInfo() should add a row to the payments table', function () {
        
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(document.querySelectorAll("#paymentTable tr").length).toEqual(2);        
    });      
    
    it('function submitPaymentInfo() should update the shift summary section', function () {
        
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        let summaryItems = document.querySelectorAll('#summaryTable tbody tr td');
        expect(summaryItems[0].innerHTML).toEqual('$100');
        expect(summaryItems[1].innerHTML).toEqual('$20');       
        expect(summaryItems[2].innerHTML).toEqual('20%');
    });  


    it('function createCurPayment() should return nothing if bill amount is empty', function () {
        billAmtInput.value = '';
        tipAmtInput.value = 20;
        expect(createCurPayment()).toBeUndefined();
    });

   
    it('function createCurPayment() should return nothing if tip amount is empty', function () {
        billAmtInput.value = 100;
        tipAmtInput.value = '';
        expect(createCurPayment()).toBeUndefined();
    });
    

    it('function createCurPayment() should return a payment object if bill > 0 and tip >=0', function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        let result = createCurPayment();
        expect(result).toBeDefined();
        expect(parseFloat(result.billAmt)).toBe(100);
        expect(parseFloat(result.tipAmt)).toBe(20);
        expect(parseFloat(result.tipPercent)).toBe(20);
    });


    it('function appendPaymentTable() should add a row to the payment table', function () {
        const paymentRec = {
            billAmt : 100,
            tipAmt  :  20,
            tipPercent : 20
        }
        
        document.querySelector("#paymentTable tbody").innerHTML = '';
        appendPaymentTable(paymentRec);
        expect(document.querySelectorAll("#paymentTable tbody tr").length).toBe(1);
        expect(document.querySelectorAll("#paymentTable tbody tr td")[0].innerHTML).toBe('$100');
        expect(document.querySelectorAll("#paymentTable tbody tr td")[1].innerHTML).toBe('$20');
        expect(document.querySelectorAll("#paymentTable tbody tr td")[2].innerHTML).toBe('20%');
    });


    it('function updateSummary() should update the summary section', function () {     
        allPayments = { payment1 : { billAmt : '100', tipAmt  :  '20', tipPercent : '20' }, 
                        payment2 : { billAmt : '100', tipAmt  :  '20', tipPercent : '20' } }  
        updateSummary();
        let tdList = document.querySelectorAll('#summaryTable tbody tr td');
        expect(tdList[0].innerHTML).toBe('$200');
        expect(tdList[1].innerHTML).toBe('$40');
        expect(tdList[2].innerHTML).toBe('20%');   
        });

        it('function appendDelBtn() should add a "remove payment" button to a given "tr" element', function () {
            let trEl = document.createElement('tr');
            appendDelBtn(trEl);
            expect(trEl.getElementsByTagName("button")).toBeDefined();
        });

    afterEach( function () {
        // clear the bill input form
        tipAmtInput.value = '';
        billAmtInput.value = '';

        // clear the summary section
        let tdList = document.querySelectorAll('#summaryTable tbody tr td');        
        tdList[0].innerHTML = '';
        tdList[1].innerHTML = '';
        tdList[2].innerHTML = '';

        // clear the payments table
        document.querySelector("#paymentTable tbody").innerHTML = '';

        // clear the payments object
        allPayments = {};

    });

        

        


});
