
const swap = (array, position1, position2) => {
    const temp = array[position1];
    array[position1] = array[position2];
    array[position2] = temp;
};

const shuffle = (array, numberOfSwaps) => {
    for (let i = 0; i < numberOfSwaps; i++) {
        const randomIndex1 = Math.floor(Math.random() * array.length);
        const randomIndex2 = Math.floor(Math.random() * array.length);
        swap(array, randomIndex1, randomIndex2);
    }
};

const findIndexOfMinimum = (array, startIndex) => {
    let minIndex = startIndex;
    for (let i = startIndex + 1; i < array.length; i++) {
        if (array[i] < array[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
};

const selection_sort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        const minIndex = findIndexOfMinimum(array, i);
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
};

const quick_sort = (array, startIndex, endIndex) => {
    if (startIndex < endIndex) {
        const pivotIndex = partition(array, startIndex, endIndex);
        quick_sort(array, startIndex, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, endIndex);
    }
};

const partition = (array, startIndex, endIndex) => {
    const pivotValue = array[endIndex];
    let pivotIndex = startIndex;

    for (let i = startIndex; i < endIndex; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }

    swap(array, pivotIndex, endIndex);
    return pivotIndex;
};

// Função para chamar um dos algoritmos de ordenação
function ordenar(algoritmo, array) {
    if (algoritmo === 'selection') {
        selection_sort(array);
    } else if (algoritmo === 'bubble') {
        bubble_sort(array);
    } else if (algoritmo === 'quick') {
        quick_sort(array, 0, array.length - 1);
    }
}

// Exemplo de uso:
const arrayParaOrdenar = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
ordenar('selection', arrayParaOrdenar);
console.log(arrayParaOrdenar);


    