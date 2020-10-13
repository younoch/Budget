//Budget Controller
var budgetController = (function() {


})();

// UI Controller
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //Will be either inc or exp
                description = document.querySelector(DOMstrings.inputDescription).value,
                value = document.querySelector(DOMstrings.inputValue).value
            };
            
        },
        getDomstrings: function() {
            return DOMstrings;
        }
    };

})();

// Global app controller
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDomstrings();

    var ctrlAddItem = function() {
        // 1. Get the field input data

        var input = UICtrl.getInput();

        //2. Add the item to budget controller

        //3. Add the item to UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('fsd')
    }


    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    ;

    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13) {
            console.log('Enter');
        }
    });
})(budgetController, UIController);

//8. Creating an Initialization Function (00:00)