let zug = [
2, 17, 10, 9, 16, 3, 5, 1, 14, 70, 44, 47, 53, 27, 8, 37, 32, 82, 91, 56, 36,
90, 33, 34, 69, 40, 38, 86, 57, 62, 65, 54, 67, 84, 43, 71, 50, 25, 75, 76, 28, 64,
4, 45, 21, 60, 15, 23, 81
];

console.log(zug.length)

let zg = []
let x 


zug.forEach(fun)


function fun(value, i, array) {
    if (value % 3 == 0 ) {
        
       x=zug.slice(i,i+1) 

        zg.push(x) 
    }

}

zg.sort(function(a,b){return b - a})

console.log('Anzahl Zahlen die durch 3 geteilt werden können: ' + zg.length)
console.log('Zahlen: ' + zg)