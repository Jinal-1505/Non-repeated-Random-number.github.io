
let generatedNumbers = [];
function generateRandomNumber() {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    if (isNaN(min) || isNaN(max)) {
        alert("Please enter valid numbers");
    }
    else {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        if (generatedNumbers.length === (max - min + 1)) {
            alert("all value generated...");
        }
        else {
            while (generatedNumbers.includes(randomNum)) {
                randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            }
            generatedNumbers.push(randomNum);
            document.getElementById("displayNumber").value = randomNum;
        }
    }
}
function ResetRangeBox() {

    document.getElementById("displayNumber").value = "";
    generatedNumbers = [];
}
function clearAllBox() {
    document.getElementById("min").value = " ";
    document.getElementById("max").value = " ";
    document.getElementById("displayNumber").value = " ";
    generatedNumbers = [];
}