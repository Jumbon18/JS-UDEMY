function pow(x, n) {
    if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}

function DecimalOfTwo(number) {
    let n = 1;
    let decimal = 2;
    if (number % 2 === 0) {
        while (decimal <= number) {
            n++;
            decimal = pow(2, n);
            if (decimal === number) {
                console.log(`YES ------number is a value 2 v stepeni ${n} total: ${decimal} and ${number}`);
            }
        }
        if (decimal > number) {
            console.log('NO');
        }

    } else {
        console.log('NO');
    }
}

DecimalOfTwo(3);

/*

const list = [
    {
        id: 1,
        name: 'alex'
    },
    {
        id: 2,
        name: 'dadad'
    }
];
const data = [
    {
        id: 2,
        name: 'ira'
    },
    {
        id: 3,
        name: 'bbjbk'
    },
];
let foundIndex = -1;
list.forEach((item, index) => {
    if (item.id === data[index].id) {
        foundIndex = index;
    }
});
console.log(foundIndex);
console.log(list, data);

console.log(list.findIndex((index, i) => index.id === 2
));

console.log(foundIndex);
*/


class Task {
    list = [
        {
            id: 1,
            name: 'a'
        }, {
            id: 2,
            name: 'b'
        },
        {
            id: 3,
            name: 'c'
        }
    ];

    async delete(data) {
   /*     let foundItemIndex = -1;
        foundItemIndex = this.list.findIndex(itemIndex => itemIndex.id === data.id);// Using findIndex method, we can easily find correct index
        console.log(foundItemIndex);*/
        let foundItemIndex = -1;
            const temp = [...this.list];
            console.log(temp);
            if(foundItemIndex !== -1 ) {
                try {// using try/catch block to correct work of promise
                    /* await axios.delete(`${process.env.API_URL}/types/${data.id}`);*/
                    this.list = temp.filter(c => c.id !== data.id);
                } catch (e) {
                    console.log(e);
                }
            }
            else{
                 throw  ('PTO Type is not found!');
            }
            /*  this.list.splice(foundItemIndex,1);*/

    }

}

let first = new Task();

first.delete({id: 2, name: 'erf'});
console.log(first.list);