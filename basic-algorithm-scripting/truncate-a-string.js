function truncateString(str, num) {

  if (str.length == num || str.length < num) {
    return str;
  }


  if (num > 3) {
    str = str.slice(0, num - 3);
  } else if (num < 3) {
    str = str.slice(0, num);

  }

  str += "...";
  console.log(str);
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
