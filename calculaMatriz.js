function calculaMatriz(numbers)
{
    var det = (numbers[0] * numbers[3]) - (numbers[1] * numbers[2]);
    if(det != 0){
        var input1Inv = numbers[3];
        var input4Inv = numbers[0];
        var input2Inv = -numbers[1];
        var input3Inv = -numbers[2];
        return [true, det, input1Inv, input2Inv, input3Inv, input4Inv]
    }
    return [false, det]
}

module.exports = calculaMatriz