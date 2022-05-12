/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


 const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "lightbulb",
    "usb drive",
  ];
  
lastItem = deskArray.pop();
deskArray.unshift(lastItem);
deskArray.sort();
const found = deskArray.find( item => item=="camera");

console.log("Original array:", deskArray);
console.log("elemento encontrado = ", found)


let removeItem = "notebook";
deskArray.splice(deskArray.indexOf(removeItem),1)
console.log("Array con elementos removidos:", deskArray);

