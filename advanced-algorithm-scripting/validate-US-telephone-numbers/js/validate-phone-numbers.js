function telephoneCheck(str) {
    str = str.replace(/^1/, '');
    str = str.replace(/\s/g, "");

    var re = /\(...\)/;
    var result = re.exec(str);
    if (result !== null) {
        var i = result.index;
        var removedParenthesis = result[0].slice(i + 1, i + 4);
        str = str.replace(re, removedParenthesis);
    }

    // now if you find any special characters, return false
    re = /\?|\(|\)|\*/;
    if (re.test(str)) {
        console.log("false: " + str);
        return false;
    }

    re = /...-...-..../;
    if (re.test(str)) {
        console.log("true: " + str);
        return true;
    }
    re = /^...-....$/;
    if (re.test(str)) {
        console.log("false: " + str);
        return false;
    }
    re = /-....$/;
    result = re.exec(str);
    if (result !== null) {
        var removed = result[0].slice(1);
        str = str.replace(re, removed);
    }
    if (str.length != 10) {
        console.log("false: " + str);
        return false;
    }



    console.log("true: " + str);
    return true;
}


telephoneCheck("1 (555) 555-5555");