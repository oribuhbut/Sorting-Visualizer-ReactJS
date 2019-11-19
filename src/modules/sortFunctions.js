var sortedArrProgress = [];

//////////Heap Sort///////////

function heap_root(input, i, array_length) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left].value > input[max].value) {
        max = left;
    }

    if (right < array_length && input[right].value > input[max].value) {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max, array_length);
    }
}

export function heapSort(input) {
    sortedArrProgress = [];
    let array_length;
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
        heap_root(input, i, array_length);
    }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
        heap_root(input, 0, array_length);
    }
    return sortedArrProgress;
}


/////////Merge Sort///////////

export function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    var middle = Math.floor(unsortedArray.length / 2);
    var left = unsortedArray.slice(0, middle);
    var right = unsortedArray.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].value < right[rightIndex].value) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex].value);
            rightIndex++;
        }
    }
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

////////////Swap Fucntion/////////////

function swap(a, i, j) {
    var tmp = a[j];
    a[j] = a[i];
    a[i] = tmp;
    let obj = {
        index1: a[i].index,
        index2: a[j].index
    }
    return sortedArrProgress.push(obj)
}

//////////Quick Sort///////////

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i].value < pivot.value) {
            i++;
        }
        while (items[j].value > pivot.value) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}
export function callQuickSort(arr, left, right) {
    sortedArrProgress = [];
    return quickSort(arr, left, right)
}
function quickSort(items, left, right) {
    console.log("here")
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return sortedArrProgress;
}


///////Bubble Sort//////////

export function bubbleSort(arr) {
    sortedArrProgress = [];
    let swapped;
    do {
        swapped = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1]) {
                if (arr[j].value > arr[j + 1].value) {
                    swap(arr, j, j + 1);
                    swapped = true;
                }
            }
        }
    } while (swapped)
    return sortedArrProgress;
}

