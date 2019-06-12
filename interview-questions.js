function URLify(str) {
    let ansStr = '';

    for (let i = 0; i < str.length; i++) {
        
        ansStr += str[i] === ' ' ? '%20' : str[i];
    }

   return ansStr;
}

// console.log(URLify('hi my name is'));

function greaterThanFive(arr) {
    let ansArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 5) 
            ansArr.push(arr[i]);
    }

    return ansArr;
}

// console.log(greaterThanFive([1, 2, 4, 5, 15, 523]));

function maxSum(arr) {
    let maxSum = arr[0] + arr[1];

    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i]
        for (let j = i + 1; j < arr.length; j++){
            sum += arr[j]
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }

    return maxSum;
}

// console.log(maxSum([4, 6, -3, 5, -2, 10, -99, 116, 5]));

function mergeArrays(arr1, arr2) {
    let ansArr = [];
    let index1 = 0, index2 = 0;
    while (index1 < arr1.length && index2 < arr2.length) {
        console.log('NEW ITERATION: ' + index1 + ' ' + index2)
        
        if(arr1[index1] > arr2[index2]) {
            console.log('pushing: ' + arr2[index2]);
            ansArr.push(arr2[index2]);
            index2++;
        } else if(arr1[index1] < arr2[index2]) {
            console.log('pushing: ' + arr1[index1]);
            ansArr.push(arr1[index1]);
            index1++;
        } else if(arr1[index1] === arr2[index2]) {
            console.log(arr1[index1])
            console.log('pushing: ' + arr1[index1] + ' and ' + arr2[index2]);
            ansArr.push(arr1[index1]);
            ansArr.push(arr2[index2]);
            index1++;
            index2++;
        }

        if (index1 === arr1.length) {
            console.log('arr 1 empty, adding ' + arr2.slice(index2));
            Array.prototype.push.apply(ansArr, arr2.slice(index2))
            index2 = arr2.length;
        } 
        if (index2 === arr2.length) {
            console.log('arr 2 empty, adding ' + arr1.slice(index1));
            Array.prototype.push.apply(ansArr, arr1.slice(index1))
            index1 = arr1.length;
        }
    }
    return ansArr;
}
// arr1       arr2
// console.log(mergeArrays([1, 3, 4, 15, 20, 30], [2, 4, 8, 30]));

function removeCharacters(str, ignore) {
    let ansStr = '';
    let add = true;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < ignore.length; j++) {
            if (str[i] === ignore[j]) {
                add = false;
            } 
        }
        
        if (add) {
            ansStr += str[i]
        }

        add = true;

    }

    return ansStr;
}

// console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

function products(arr) {
    let ansArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (j !== i) product *= arr[j]   
        }

        ansArr.push(product);
    }

    return ansArr;
}
// console.log(products([1, 3, 9, 4]));

function array2D(arr) {
    let ansArr = [];

    for (let i = 0; i < arr.length; i++) {
        ansArr.push([]);
    }

    for (let row = 0; row < arr.length; row++) {
        
        for (let col = 0; col < arr[row].length; col++) {
            if (arr[row][col] === 0) {
                setRow(arr, row);
                setCol(arr, col);
            } else {
                if (ansArr[row][col] !== 0) {
                    ansArr[row][col] = 1;
                }
            }
        }
    }

    function setRow(arr, row) {
        console.log('setting row: ' + row);
        for (let col = 0; col < arr[row].length; col++) {
            console.log('     ' + row + col)
            ansArr[row][col] = 0;
        }
    }

    function setCol(arr, col) {
        console.log('setting col: ' + col);
        for (let row = 0; row < arr.length; row++) {
            ansArr[row][col] = 0;
        }
    }

    return ansArr;
}

// console.log(array2D([[1, 0, 1, 1, 0],
// [0, 1, 1, 1, 0],
// [1, 1, 1, 1, 1],
// [1, 0, 1, 1, 1],
// [1, 1, 1, 1, 1]]))

function stringRotation(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        let tempstr = '';

        tempstr = str2.slice(i) + str2.substring(0, i);
        
        if (str1 === tempstr) return true;
    }

    return false;
}

console.log(stringRotation('amazon', 'azonam'));

// Input: amazon, azonma 

// Output: False

// Input: amazon, azonam - mazona - amazon

// Output: true