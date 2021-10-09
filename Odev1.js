const arguments = process.argv.slice(2);

function daireAlan(yariCap) {
    const pi = 3.14;
    let alan=(yariCap*yariCap)*pi;
    console.log("Yarıçapı ",yariCap," olan dairenin alanı: ",alan);
}
daireAlan(arguments[0]*1);