function shortest_word(str) {
    var splitStr = str.split(" ");
    var shortest_word = str;

    for(var i = 0; i < splitStr.length; i++){
        if(splitStr[i].length < shortest_word.length){
            shortest_word = splitStr[i];
        }
    }
    return shortest_word;
}