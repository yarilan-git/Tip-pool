describe("Helpers tests", function() {   

    //------------------------------------------------

    it('function sumPaymentTotal() should correclty sum a given column in the allPayments object', function () {
        allPayments = {};
        allPayments = { payment1 : { billAmt : '100', tipAmt  :  '20', tipPercent : '20' }, 
                        payment2 : { billAmt : '100', tipAmt  :  '20', tipPercent : '20' } }
        let totalBill = sumPaymentTotal('billAmt');
        let totalTip  = sumPaymentTotal('tipAmt');
        let totalTipPercent  = sumPaymentTotal('tipPercent');
        expect(totalBill).toBe(200);
        expect(totalTip).toBe(40);
        expect(totalTipPercent).toBe(40);   
    });

    //------------------------------------------------

    it('function calculateTipPercent() should correcly calculatea tip percentage',  function () {
        expect(calculateTipPercent(150, 30)).toBe(20);
    });

    //------------------------------------------------

    it('function appendTd() should add a "td" element to a given "tr" element',  function () {
        const trEl = document.createElement('tr');
        appendTd(trEl, '150');
        expect(trEl.querySelector("td").innerText).toBe('150');      
    });

})
