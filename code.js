// Referenced: 
// https://github.com/COSC3020/brute-force-sorting-MelkMan419/blob/main/code.js
// https://github.com/COSC3020/brute-force-sorting-tlaceby/blob/main/code.js

function permutationSort(a) {
    return permSort(a, 0, 0);
}

function permSort(arr, i, numChecked){
    if(i == arr.length-1){
        numChecked++;
        if(checkSorted(arr) == true){ return numChecked; }
    }
    for(let j = i; j < arr.length; j++){
        swap(arr, i, j);
        numChecked = permSort(arr, i+1, numChecked);
        if(checkSorted(arr) == true){ return numChecked; }
        swap(arr, i, j);
    }
    return numChecked;
}

function checkSorted(a) { 
    for (let i = a.length-1; i > 0; i--) { 
        if (a[i] < a[i - 1]) { return false; } 
    } 
    return true; 
} 

function swap(a, elem1, elem2){
    let tmp = a[elem1];
    a[elem1] = a[elem2];
    a[elem2] = tmp;
    return;
}