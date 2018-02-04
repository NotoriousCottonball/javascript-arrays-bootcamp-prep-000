var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];
function addElementToBeginningofArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}
