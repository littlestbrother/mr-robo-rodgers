function countUp(num) {//back-end starts here 👇
    let dummy = [];//variables for this function
    let int = 0;

    while (int <= num) { //while loop to generate array that increments by one toward user defined integer
        dummy.push(int);
        int++;
    }
    return dummy;
}

function analyzeHierarchy(num) {
    num.forEach(element => {
        let hasThree = /3/.test(element);//test if current element contains either 3,2,1
        let hasTwo = /2/.test(element);
        let hasOne = /1/.test(element);

        if (hasThree == true) { //determine what the element will be replaced by
            num[element] = "Won't you be my neighbor?";
        } else {
            if (hasTwo == true) {
                num[element] = "Boop!";
            } else {
                if (hasOne == true) {
                    num[element] = "Beep!";
                }
            }
        }
    });
    return num;
}

function convertToResult(num) {
    num = num.toString(); //convert array to string
    num = num.replace(/[, ]+/g, " "); //replace commas with spaces
    return num;
} //back-end starts here 👆

$(document).ready(function () {
    $("form").submit(function () {//front-end starts here 👇
        event.preventDefault();
        let int = $("input#text").val();//get user input
        int = countUp(int);
        $("#result").text(convertToResult(analyzeHierarchy(int)));//analyze array hierarchy, push text to array, display result.
    });
});//front-end ends here 👆