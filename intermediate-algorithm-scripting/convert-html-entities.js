
function convertHTML(str) {

  str = str.replace(/&/g, '&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,"&quot;").replace(/'/,"&apos;");
  // &colon;&rpar;
  console.log(str);
  return str;
}

convertHTML("Dolce & Gabbana");
