function avg(sentence) {
    var wordSum = 0;
    var avg = 0;

    var splitStr = sentence.split(" ");
    for(var i = 0; i < splitStr.length; i++){
         wordSum += splitStr[i].length;
    }
    avg = wordSum/splitStr.length;
    return(avg);
}