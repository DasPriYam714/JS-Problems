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