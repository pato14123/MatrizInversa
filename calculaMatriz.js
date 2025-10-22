function calculaMatriz(numbers)
{
    var det = (numbers[0] * numbers[3]) - (numbers[1] * numbers[2]);
    if(det != 0){
        var input1Inv = Number(numbers[3])/det;
        var input4Inv = Number(numbers[0])/det;
        var input2Inv = -Number(numbers[1])/det;
        var input3Inv = -Number(numbers[2])/det;
        return [true, det, input1Inv, input2Inv, input3Inv, input4Inv]
    }
    return [false, det]
}

module.exports = calculaMatriz