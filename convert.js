function inchToFeet(inch){
    const feet = inch/12;
    return feet;

}
let jackHeight= inchToFeet(80);
console.log("The height of Jack is "+jackHeight+" feets.");


// How to use fractional digits

function inchToFeet2(inch){
    const feetFraction = inch/12;
    const feetN= parseInt(feetFraction);
    const inc = inch%12;
    const results = feetN + '  feet ' + inc + ' inch.';
    return results;

}

let jackHeight2= inchToFeet2(80);
console.log("The height of Jack is "+jackHeight2);

// check a year leap year or not.

function yearLeapYear(year){
    if(year % 100 !== 0 && year % 4=== 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 ===0){
        return true;
    }
    else{
        return false;
    }
}

const isLeap = yearLeapYear(1900);
const isLeap1 = yearLeapYear(1920);
const isLeap2 = yearLeapYear(2010);
const isLeap3 = yearLeapYear(2060);

console.log(isLeap, isLeap1, isLeap2,isLeap3);