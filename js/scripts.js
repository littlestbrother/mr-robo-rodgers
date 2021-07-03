//back-end
function countUp(num) {
    let dummy = [];//variables for this function
    let int = 0;

    while (int <= num) { //while loop to generate array that increments by one toward user defined integer
        dummy.push(int);
        int++
    }
    return dummy; //return newly generated array
}

function analyzeHierarchy(num) {
    num.forEach(element => {
        console.log(element);
        let hasThree = /3/.test(element);//test if current element contains either 3,2,1
        let hasTwo = /2/.test(element);
        let hasOne = /1/.test(element);

        if (hasThree == true) { //determine what the element will be replaced by
            console.log(element + " = " + "neighbor") //debug
            num[element] = "Won't you be my neighbor?";
        } else {
            if (hasTwo == true) {
                console.log(element + " = " + "boop")
                num[element] = "Boop!";
            } else {
                if (hasOne == true) {
                    console.log(element + " = " + "beep")
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
    return num
}

$(document).ready(function () {
    // :)
    $("form").submit(function () {
        event.preventDefault();
        //ui logic goes here
        let int = $("input#text").val();
        int = countUp(int);
        $("#result").text(convertToResult(analyzeHierarchy(int)));
    });
    // :)
});

