//Budget Controller
var budgetController = (function() {

var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
}

var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value =value;
};

var data = {
    allItems: {
        exp: [],
        inc: []
    },
    total: {
        exp:0,
        inc: 0
    }   
};

return {
    addItem: function(type, des, val) {
        var newItem, ID;

        //[1 2 3 4 5], next ID =6;
        //[1 2 4 6 8]. next ID =8;
        // ID  = last ID + 1

        //Create new ID

        if(data.allItems[type].lenght > 0) {
            ID = data.allItems[type][data.allItems[type].lenght -1].id + 1;
        } else {
            ID = 0;
        }
        
        // Create new item baseed  on 'inc' or 'exp' type
        if(type === 'exp') {
            newItem = new Expense(ID, des, val);
        } else if(type === 'inc') {
            newItem = new Income(ID, des, val);
        }

        // Push it into our data structure
        data.allItems[type].push(newItem);

        //Return the new element
        return newItem;
    },

    testing: function() {
        console.log(data);
    }
};

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
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
            
        },

        addListItem: function(obj, type) {
            var HTML,newHTML;
            //Create HTML string with placeholder text

            if(type ==='inc') {
                HTML = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp')  {
                HTML = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            //Replace the placeholder text with some actual data
            newHTML = html.replace('%d%', obj.id);
            newHTML = newHTML.replace('%description', obj.description);
            newHTML = newHTML.replace('%value%', obj.value);



            // Insert the HTML into the DOM
        },

        getDomstrings: function() {
            return DOMstrings;
        }
    };

})();

// Global app controller
var controller = (function(budgetCtrl, UICtrl) {
    
    var DOM = UICtrl.getDomstrings();

    var setupEventListeners = function() {

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        ;

        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                console.log('Enter');
            }
        });
    };

    var ctrlAddItem = function() {
        var input, newItem;
        // 1. Get the field input data

        input = UICtrl.getInput();

        //2. Add the item to budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. Add the item to UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    
    };

    return {
        init: function() {
            console.log ('Application has started.');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();

//11. Adding a New Item to the UI (11:00)