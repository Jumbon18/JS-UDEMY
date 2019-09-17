function binarySearch(arr, item) {
    let low = 0,
        height = arr.length - 1;

    while (low <= height) {
        let mid = parseInt((low + height) / 2);
        let guess = arr[mid];
        console.log(guess);
        if (guess === item) {
            console.log('step middle', 'item Found');
            return mid;
        } else if (guess > item) {
            console.log('Step hight');
            height = mid - 1;
        } else if (guess < item) {
            console.log('Step low');
            low = mid + 1;
        } else {
            console.log('Item not found!');
            return -1;
        }
    }
}

let list = [1, 4, 8, 12, 25, 23, 523, 6, 243, 34, 75, 2, 4, 8, 12, 25, 23, 523, 6, 243, 34, 75];
list.sort((a, b) => a - b);
//console.log(list);
//console.log(binarySearch(list,1));


// Selection sort
function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

function selectionSort(arr) {
    arr.forEach((item, index) => {
        let max = index;
        for (let i = index + 1; i < arr.length; i++) {
            if (arr[i] > arr[max]) {
                max = i;
            }
        }
        swap(arr, index, max);

    });

    return arr;
}

let array = [100, 104, 23, 52, 321, 53, 12, 523, 512];
//console.log(selectionSort(array));
// Феномкны индивидуальных решение


let sum = (arr) => (arr.length === 0) ? 0 : arr[0] + sum(arr.slice(1));
//console.log(sum([1,2,3,4,5]));


//Count element in a list
let count = (arr) => (arr.length === 0) ? 0 : 1 + count(arr.slice(1));
//  console.log(count([1,2,3,4,5,67,8]));

let List = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
console.log(List);


let countList = (object) =>
    (!object) ? 0 :
        (typeof object === 'object' ? 1 + countList(object.next) : 0);
//console.log(countList(List));

// Find MAX element in Array RECURSIVE

let recursiveMax = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    if (arr[0] < recursiveMax(arr.slice(1))) {
        return recursiveMax(arr.slice(1));
    }
};

console.log(recursiveMax([1, 2, 3, 4, 5]));

let test = [1, 2, 3, 4, 5];
test.forEach((item, index) => {
    let max = test[0];
    if (max < item) {

    }
});


// finding next element

function next(text) {
    const symbols = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
    let result = symbols.findIndex((item) => text === item) + 1;
    console.log(symbols[result]);
}

/*
window.addEventListener("keydown",()=>{
    next(event.key);
});*/

// flowers

function flowers(names,amountOfDays) {
if(amountOfDays <=0){
    return names;
}
else {
    names= names.split('');
    let temp = [...names];
    temp.splice(0, 2);
    names.splice(2, 1);


    return flowers(temp.concat(names).join(''),amountOfDays-1);
}
}

console.log(flowers("GCV",2));
