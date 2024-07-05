let bloodType = 'oNegative';
let eyeColor = 'hazel';
const docVisit = (bloodType, eyeColor) => `If your blood type is ${bloodType}, 
and your eye color is ${eyeColor}, you will live forever!`;
let resultDoc = docVisit(bloodType, eyeColor);


// console.log(docVisit(bloodType, eyeColor));
console.log(resultDoc);

// document.querySelector('.anatomyBox').innerText = resultDoc;
document.getElementById('anatomyBox').innerText = resultDoc;
