
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
    var compareEndOfString = str.substring(str.length - target.length);

    return compareEndOfString == target;
}

confirmEnding("Bastian", "n");
