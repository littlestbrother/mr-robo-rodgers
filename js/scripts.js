//back-end
function countUp(int) {
    let dummy = [];//variables for this function
    let base = null;

    while (base < int) { //while loop to generate array that increments by one toward user defined integer
        base++
        dummy.push(base);
    }
    return dummy; //return newly generated array
}

function analyzeHierarchy(int) {
    int.forEach(element => {
        console.log(element);
        let hasThree = /3/.test(element);//test if current element of contains either 3,2,1
        let hasTwo = /2/.test(element);
        let hasOne = /1/.test(element);

        if (hasThree == true){ //determing what element will be replaced by
            console.log(element + " = " + "neighbor")
            //call for element to change neighbor
        } else {
            if (hasTwo == true){
                console.log(element + " = " + "boop")
                //change element to boop
            } else {
                if (hasOne == true){
                    console.log(element + " = " + "beep")
                    //change element to beep
                }
            }
        }
    });
}

$(document).ready(function () {
    // :)
    $("form").submit(function () {
        event.preventDefault();
        //ui logic goes here
        let input = $("input#text").val();
        input = countUp(input);
        analyzeHierarchy(input);
    });
    // :)
});

