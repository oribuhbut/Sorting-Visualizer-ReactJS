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

//////////Quick Sort///////////

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i].value < pivot.value) {
            i++;
        }
        while (items[j].value > pivot.value) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}
export function callQuickSort(arr, left, right) {
    sortedArrProgress = [];
    return quickSort(arr, left, right);
}
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
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


////////////Swap Fucntion/////////////

function swap(a, i, j) {
    var tmp = a[j];
    a[j] = a[i];
    a[i] = tmp;
    let obj = {
        index1: a[i].index,
        index2: a[j].index
    }
    return sortedArrProgress.push(obj);
}
