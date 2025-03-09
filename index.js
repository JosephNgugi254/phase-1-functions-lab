// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    let distance = street - 42;
    return Math.abs(distance);
    return farePrice;
}

function distanceFromHqInFeet(street) {
    let distanceInBlocks = distanceFromHqInBlocks(street);
    let distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {  
    let distance = Math.abs(start - destination) * 264;
    return distance;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let farePrice = 0;
    if (distance <= 400) {
        farePrice = 0;
    } else if (distance > 400 && distance <= 2000) {
        farePrice = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        farePrice = 25;
    } else if (distance > 2500) {
        farePrice = 'cannot travel that far';
    }

    return farePrice;
}

console.log(calculatesFarePrice(34, 24));
