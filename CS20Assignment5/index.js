document.getElementById("submit").addEventListener("button", inputnum);

function inputnum() {
    var FirstNumber = document.getElementById("numone").value;
    var SecondNumber = document.getElementById("numtwo").value;

    var FirstSum = 0;
    var SecondSum = 0;

    var ArrayFirstNumber = [];
    var ArraySecondNumber = [];

    FirstSum = sum(ArrayFirstNumber, FirstSum, FirstNumber);
    SecondSum = sum(ArraySecondNumber, SecondSum, SecondNumber);

    amicable (FirstSum, SecondSum, FirstNumber, SecondNumber, ArrayFirstNumber, ArraySecondNumber);

}

function amicable (FirstSum, SecondSum, FirstNumber, SecondNumber, ArrayFirstNumber, ArraySecondNumber) {
    if ((FirstSum === SecondNumber) && (SecondSum === FirstNumber)) {
        document.getElementById("result").innerHTML = "The numbers:  " + FirstNumber + " and " + SecondNumber  + " are amicable";
    } else {
        document.getElementById("result").innerHTML = "The numbers:  " + FirstNumber + " and " + SecondNumber + " are not amicable";
    }
    document.getElementById("factors").innerHTML = "The factors of " + FirstNumber + " are " + ArrayFirstNumber + ".\n The factors of " + SecondNumber + " are " + ArraySecondNumber + ".";
}

function factors (array, fact, num) {
    if ((num % fact) === 0) {
            array.push(fact);
            return fact;
    }
    return 0;
}

function sum (array, sum, num) {
    for (let i = 1; i <= num; i++) {
        sum += factors(array, i, num);
    }
    return sum;
}