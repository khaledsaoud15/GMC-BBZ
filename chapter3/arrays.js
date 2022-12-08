const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.push(1);
arr.push(2); //add element to the last place of the array
console.log(arr);

//removes the last element from the array
const removedElement = arr.pop();
console.log(removedElement);
console.log(arr);

arr.unshift(5); // adds the elemnt in the start of the array
arr.unshift(9);
console.log(arr);

const removedFirstElement = arr.shift(); //removes the first in the array
console.log(removedFirstElement);
console.log(arr);

console.log(arr[0]);
console.log(arr[Math.floor(arr.length / 2)]);
console.log(arr[arr.length - 1]);

//   1. Declare an *empty* array;
// 2. Declare an array with more than 5 number of elements
// 3. Find the length of your array
// 4. Get the first item, the middle item and the last item of the array
// 5. Declare an array called *mixedDataTypes*, put different data types in the array and find the length of the array. The array size should be greater than 5
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// 7. Print the array using *console.log()*
// 8. Print the number of companies in the array
// 9. Print the first company, middle and last company
// 10. Print out each company
// 11. Change each company name to uppercase one by one and print them out
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is *not found*
// 14. Filter out companies which have more than one 'o' without the filter method
// 15. Sort the array using *sort()* method
// 16. Reverse the array using *reverse()* method
// 17. Slice out the first 3 companies from the array
// 18. Slice out the last 3 companies from the array
// 19. Slice out the middle IT company or companies from the array
// 20. Remove the first IT company from the array
// 21. Remove the middle IT company or companies from the array
// 22. Remove the last IT company from the array
// 23. Remove all IT companies

const mixedDataType = [1, "str", [1, 2], { name: "khaled" }, undefined, true];

console.log(mixedDataType);
console.log(mixedDataType.length);

const itCompanies = [
  "Facebook",
  "Oracle",
  "Google",
  "IBM",
  "Amazon",
  "Microsoft",
  "Apple",
];

console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

function checkCompany(company) {
  if (itCompanies.includes(company)) {
    return company;
  }
  return "company not found";
}
console.log("\n");

console.log(checkCompany("Microsoft"));
console.log(checkCompany("Hamoud"));

function chckDoubleO() {
  let copy = [];
  for (let i = 0; i < itCompanies.length; i++) {
    let count = 0;
    for (let j = 0; j < itCompanies[i].length; j++) {
      if (itCompanies[i][j] === "o") {
        count++;
      }
    }
    if (count > 1) {
      copy.push(itCompanies[i]);
    }
  }
  return copy;
}

console.log(chckDoubleO());

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(3));
console.log(itCompanies.slice(0, 4));
