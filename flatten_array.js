let array = [[0, 1], [2, 3], [4, 5, [6, 7, [8, [9, 10]]]]];
array = JSON.stringify(array).replace(/\[/g, '').replace(/\]/g, '').split(',').map(x => Number(x));
console.log(array);        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var newArray = [].concat(...array);

// console.log(newArray);

