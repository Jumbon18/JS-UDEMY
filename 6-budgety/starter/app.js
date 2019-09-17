let budgetController = (() => {

    let Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };
    Expense.prototype.getPercentage = function () {
        return this.percentage;
    };
    let Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    let calculateTotal = ((type) => {
        let sum = 0;
        data.allItems[type].forEach((curr, index, arr) => {
            sum += curr.value;
        });
        data.totals[type] = sum;

    });
    let data = {
        allItems: {
            expense: [],
            income: []
        },
        totals: {
            expense: 0,
            income: 0
        },
        budget: 0,
        percentage: -1

    };


    return {
        addItem(type, des, val) {
            let newItem, ID;
            /// setting ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            if (type === 'expense') {
                newItem = new Expense(ID, des, val);

            } else if (type === 'income') {
                newItem = new Income(ID, des, val);
            }
            data.allItems[type].push(newItem);
            return newItem;
        },
        testing() {
            console.log(data);
        },
        calculateBudget() {
            // calculate total income and expanses
            calculateTotal('expense');
            calculateTotal('income');
            // calculate the budget : income - expenses
            data.budget = data.totals.income - data.totals.expense;
            // calculate the percentage of income that we spent
            if (data.totals.income > 0) {
                data.percentage = Math.round((data.totals.expense / data.totals.income) * 100);
            } else {
                data.percentage = -1;
            }
        },
        getBudget() {
            return {
                budget: data.budget,
                income: data.totals.income,
                expense: data.totals.expense,
                percentage: data.percentage
            }
        },
        deleteItem(type, id) {
            let ids, index;
            ids = data.allItems[type].map((current) => {
                return current.id;
            });
            index = ids.indexOf(id);

            if (index !== 1) {
                data.allItems[type].splice(index, 1);
            }
        },
        calculatePercentages() {
            data.allItems.expense.forEach((cur) => {
                cur.calcPercentage(data.totals.income);
            });
        },

        getPercentage() {
            let allPerc = data.allItems.expense.map((cur) => {
                return cur.getPercentage();
            });
            return allPerc;
        }

    }

})();
///////////////////////////
let UIController = (() => {

    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    let formatNumber = (number, type) => {
        number = Math.abs(number);
        number = number.toFixed(2);
        let numSplit = number.split('.');
        let int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, int.length);
        }

        let dec = numSplit[1];


        return (type === 'expense' ? '-' : '+') + ' ' + int + '.' + dec;
    };
    let nodeListForEach = ((list, callback) => {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    });
    return {
        getInput() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,// will be + or -
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        getDOMstrings() {
            return DOMstrings;

        },

        addListItem(obj, type) {
            let html, newHtml, element;
            //Create HTMl string
            if (type === 'expense') {
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div>' +
                    '<div class="right clearfix">' +
                    '<div class="item__value">%value%</div>' +
                    '<div class="item__percentage">21%</div>' +
                    '<div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            } else {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%">' +
                    '<div class="item__description">%description%</div>' +
                    '<div class="right clearfix">' +
                    '<div class="item__value">%value%</div>' +
                    '<div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }
            // raplce the text
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            //insert the HTml into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        clearFields() {
            let fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            let fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach((current, index, arr) => {
                current.value = "";
            });
            fieldsArr[0].focus();
        },
        displayBudget(obj) {
            let type;
            obj.budget > 0 ? type = 'income' : type = 'expense';
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.income, 'income');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.expense, 'expense');
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';

            }
        },

        deleteListItem(selectorID) {
            let el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);


        },
        displayPercentages(percentages) {
            let fields = document.querySelectorAll(DOMstrings.expensesPercLabel);


            nodeListForEach(fields, function (current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
        },

        displayMonth() {
            let year, now, month, months;
            now = new Date();
            year = now.getFullYear();
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            document.querySelector(DOMstrings.dateLabel).textContent = year + ' ' + months[month];

        },
        changeType() {
            let fields = document.querySelectorAll(DOMstrings.inputType + ',' + DOMstrings.inputDescription
                + ',' + DOMstrings.inputValue);
            nodeListForEach(fields, ((curr) => {
                curr.classList.toggle('red-focus');
            }));
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
        }


    }
})();

/////////////////////////////////
let controller = ((budgetCtrl, UICtrl) => {
    let setUpEventListeners = (() => { // СОБЫТИЯ КЛИКОВ НА СТРАНИЦЕ
        let DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', ((event) => {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        }));

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.inputType).addEventListener('change',UICtrl.changeType);
    });
    let updateBudget = (() => { // ПОДСЧЕТ И ВЫВОД БЫЮДЖЕТА НА ЭКРАН

        // 4 - calculate the budget
        budgetCtrl.calculateBudget();
// 2 - return the budget
        let budget = budgetCtrl.getBudget();
        // 5 - display the budget on UI
        UICtrl.displayBudget(budget);
    });

    let updatePercentages = (() => { // ПОДСЧЕТ И ВЫВОД ПРОЦЕНТОВ  НА ЭКРАН
        //1. calculate perc
        budgetCtrl.calculatePercentages();
        //2. Read perc form the budget contr
        let percentages = budgetCtrl.getPercentage();
        //3. Update the UI
        UICtrl.displayPercentages(percentages);
    });

    let ctrlAddItem = function () {

///// 1 -get input data
        let input = UICtrl.getInput();
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            // 2- add the item to the budget controller
            let newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3 - add to the UI
            UICtrl.addListItem(newItem, input.type);

            //4 - clear the fields
            UICtrl.clearFields();
            // 5   - calculate and update budget
            updateBudget();
            //6 calc perc and update perc
            updatePercentages();
        }
    };
    let ctrlDeleteItem = function (event) {
        let splitID, type, ID;
        let itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            //1 -delete the item from data structure
            budgetCtrl.deleteItem(type, ID);
            //2 -delete item from UI
            UICtrl.deleteListItem(itemID);
            //3 - update the budget
            updateBudget();
            //6 calc perc and update perc
            updatePercentages();
        }
    };
    return {
        init() {
            setUpEventListeners();
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                income: 0,
                expense: 0,
                percentage: -1
            });
        }
    }

})(budgetController, UIController);

controller.init();

