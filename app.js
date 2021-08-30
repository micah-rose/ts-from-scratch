function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult === true) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
