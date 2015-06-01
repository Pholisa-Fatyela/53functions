function longest_word(str) {
    //var str = "hello my name is pholisa";
    var splitStr = str.split(" ");
    var longest_word = " ";

    for(var i = 0; i < splitStr.length; i++){
        if(splitStr[i].length > longest_word.length){
            longest_word = splitStr[i];
        }
    }
    return longest_word;
}
