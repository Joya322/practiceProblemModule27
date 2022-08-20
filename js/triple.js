//for triple button

//adding event handler on triple button
document.getElementById("triple-btn").addEventListener("click", function () {
  //find the text of triple input field

  const tripleField = document.getElementById("triple-field");

  //get the given input as string

  const tripleString = tripleField.value;

  //get the given input as number

  const tripleNumber = parseFloat(tripleString);

  //clear the input field

  tripleField.value = "";

  if (isNaN(tripleNumber)) {
    alert("Please enter a number");
    return;
  } else {
    //calculate triple
    const result = tripleNumber * tripleNumber * tripleNumber;

    //showing the result
    const text = document.getElementById("triple-value");

    text.innerText = result;
  }
});
