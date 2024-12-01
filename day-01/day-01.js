// This was solved in browser console
a = `input goes here`;
b = a.replaceAll('   ', '\n').split('\n');

// Part 1
let arr_1 = [];
let arr_2 = [];


for (i = 0; i < b.length; i++) {
    if(i % 2 == 0) {
        arr_2.push(b[i]);
    } else {
        arr_1.push(b[i]);
    }
}

arr_1.sort();
arr_2.sort();
// console.log(arr_1.length, arr_2.length);

let arr_3 = [];

for (let i = 0; i < arr_1.length; i++) {
    arr_3.push( Math.abs(arr_1[i] - arr_2[i]) );
}


let output =  0;
for (let i = 0; i < arr_3.length; i++) {
    output += arr_3[i];
}
console.log('part 1 answer: ',output);

// Part 2

let count = arr_1.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

output_2 = 0
for (let i = 0; i < arr_2.length; i++) {
    if (count[arr_2[i]]) {
        output_2 += arr_2[i] * count[arr_2[i]];
    } else {
        output_2 += arr_2[i] * 0;
    }
}

console.log('part 2 answer: ', output_2);

