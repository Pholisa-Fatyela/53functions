function hello_list(num) {
    var array = [];
    var str = "Hello world";

    while (array.length < num) {
        array.push(str);
    }
    return array;
}
