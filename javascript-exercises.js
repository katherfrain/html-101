function hello(name) {
    if (!name) {
        console.log("Hello world")
    }
    else {
    console.log('Hello ' + name) 
    }   
}
hello('John');
hello();

function madlib(name, subject) {
    console.log(name + "'s favorite subject in school is " + subject + ".");
}
madlib("Andrea", "Japanese");

function tipAmount(bill, service) {
    if (service === "good") {
        return (bill * .20)
    }
    else if (service === "fair") {
        return (bill * .15)   
    }
    else {
        return (bill * .10)
    }
}
console.log(tipAmount(100, "good"));

function totalAmount(bill, service) {
    const tipThis = tipAmount(bill, service);
    return (bill + tipThis)
}

console.log(totalAmount(100, 'good'));

function splitAmount(bill, service, peoplenumber) {
    const total = totalAmount(bill, service);
    return (total/peoplenumber)
}
console.log(splitAmount(100, 'good', 3))

