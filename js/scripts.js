//back-end
function countUp(int) {

    let dummy = [];
    let base = null;

    while (base < int) {
        base++
        dummy.push(base);
    }
    return dummy;
}

function convertToStatement(int){
    let dummy = [];
    int.array.forEach(element => {
        
    });
}

$(document).ready(function () {
    // :)
    $("form").submit(function () {
        event.preventDefault();
        //ui logic goes here
        let input = $("input#text").val();
        input = countUp(input);
    });
    // :)
});

