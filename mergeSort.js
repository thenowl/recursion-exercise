function mergeSort(array) {
  if (array.length === 0) return;
  if (array.length === 1) return array;

  let firstHalf = array.slice(0, array.length / 2);
  let secondHalf = array.slice(array.length / 2);

  firstHalf = mergeSort(firstHalf);
  secondHalf = mergeSort(secondHalf);

  const sorted = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < firstHalf.length && j < secondHalf.length) {
    firstHalf[i] < secondHalf[j]
      ? (sorted[k++] = firstHalf[i++])
      : (sorted[k++] = secondHalf[j++]);
  }

  for (i; i < firstHalf.length; i++) {
    sorted[k++] = firstHalf[i];
  }
  for (j; j < secondHalf.length; j++) {
    sorted[k++] = secondHalf[j];
  }

  return sorted;
}
