function isArraysLengthOdd(numbers) {
  const sizeOfArrays = numbers.length;
  if (sizeOfArrays % 2) {
    return true;
  } else {
    return false;
  }
}

//console.log(isArraysLengthOdd([1, 2, 3]));

function isArraysLengthEven(numbers) {
  return !isArraysLengthOdd;
}

// console.log(isArraysLengthEven([1, 2, 3]));

function addLailaToArray(intractors) {
  const newInstractors = intractors;
  newInstractors.push("Laila");
  return newInstractors;
}

// console.log(addLailaToArray(["Mshary", "Hasan"]));

function eliminateTeam(teams) {
  return teams.pop();
}
//console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));

function secondHalfOfArrayIfItIsEven(fruits) {
  if (fruits.length % 2 === 0) {
    return fruits.slice(fruits.length / 2, fruits.length);
  } else if (fruits.length % 2 !== 0) {
    return [];
  }
}
console.log(
  secondHalfOfArrayIfItIsEven([
    "apple",
    "orange",
    "banana",
    "kiwi",
    "blueberry",
  ])
);
