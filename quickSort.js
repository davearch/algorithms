/*
 * quicksort implementation in javascript.
 * best case: O(logn);
 * worst case: O(n2);
 */
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function partition(arr, pivot, left, right) {
  var pivotValue = arr[pivot];
  var partitionIndex = left;
  for (var i = left; i <= right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function quickSort(arr, left, right) {
  var pivot = right;
  var partitionIndex;

  if (left < right) {
    partitionIndex = partition(arr, pivot, left, right);

    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

const setup = () => {
  var arr = [3, 5, 2, 7, 9, 1, 6];
  console.log("before: " + arr);
  quickSort(arr, 0, arr.length);
  console.log("after: " + arr);
};
module.exports = { quickSort, setup, swap };
