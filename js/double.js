//for double button

//adding event handler on double button
document.getElementById("double-btn").addEventListener("click", function () {
    //find the text of double input field

    const doubleField = document.getElementById("double-field");

    //get the given input as string

    const doubleString = doubleField.value;

    //get the given input as number

    const doubleNumber = parseFloat(doubleString);

    //clear the input field

    doubleField.value = "";

    if (isNaN(doubleNumber)) {
        alert("Please enter a number");
        return;
    }
    else {
        //calculate double
        const result = doubleNumber * doubleNumber;

        //showing the result
        const text = document.getElementById("double-value");

        text.innerText = result;
    }
})