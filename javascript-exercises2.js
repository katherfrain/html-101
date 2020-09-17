function printNumbers(startnumber, endnumber) {
    for(let x = startnumber; x <= endnumber; x++) {
        console.log(x);
    }
}
printNumbers(7,14);

function printSquare(dimensions) {
    for(let x = dimensions; x >= 0; x--) {
        console.log("*".repeat(dimensions));
    }
}
printSquare(8);

function printBox(height, width) {
    console.log('*'.repeat(width))
    for(let x = (height-2); x > 0; x--) {
        console.log('*' + ' '.repeat(width-2) + '*');   
    }
    console.log('*'.repeat(width));
}
printBox(8, 4);

function printBanner(string) {
    const asterisks = string.length;
    console.log("*".repeat(asterisks + 2));
    console.log("*" + string + "*");
    console.log("*".repeat(asterisks + 2))
}
printBanner("hello");

function factorANumber(number){
    let factors = []
    for(let x = number; x >= 0; x--) {
        if(number % x === 0) {
            factors.push(x)
        }
    }
    console.log(factors)
}
factorANumber(8)