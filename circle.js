const pi = 3.14;
function circleArea (r) {
    let area=(r*r)*pi;
    console.log("Yarıçapı ",r," olan dairenin alanı: ",area);
}

function circleCircumference (r){   
    let circumference=2*pi*r;
    console.log("Yarıçapı ",r," olan dairenin alanı: ",circumference);
}
module.exports = {
    circleArea,
    circleCircumference
}