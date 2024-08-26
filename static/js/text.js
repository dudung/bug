/*
  text.js
  Some functions for text manipulation
  
  Sparisoma Viridi | https://github.com/dudung
  
  20240826 Contintue this collection.
  + readFromTextarea(id) -- Sparisoma Viridi
  
  20240825 Start this collection of functions
  + countOccurrences(str, word) -- Joel Olawanle (not yet used)
  + getEOLChar(text) -- Sparisoma Viridi
  + writeToTextarea(id, content) -- Sparisoma Viridi
*/


/*
  Read content of textarea id
  Sparisoma Viridi
  20240826
*/
function readFromTextarea(id) {
  let el = document.getElementById(id);
  let content = el.value;
  return content;
}


/*
  Write text to a textarea with id
  Sparisoma Viridi
  20240825 Create this.
  20240826 Change join('\n\) to join(eol).
*/
function writeToTextarea(id, content) {
  let eol = getEOLChar(content);
  let el = document.getElementById(id);
  let peol = content.indexOf(eol);
  
  if(peol == 0) {
    let lines = content.split(eol);
    if(lines[0] == "") lines.shift();
    let text = lines.join(eol);
    el.value = text;
  } else {
    el.value = content;
  }
}


/*
  Get end of line charater from text
  Sparisoma Viridi
  20240825
*/
function getEOLChar(text) {
  let peolw = text.indexOf('\r\n');
  let peolx = text.indexOf('\n');
  let peolm = text.indexOf('\r');
  let eol = '';
  
  if(peolm == 0 && peolx == -1) eol = '\r';
  if(peolw == 0 && peolx == 1) eol = '\r\n';
  if(peolx == 1 && peolm == -1) eol = '\n';
  
  return eol;
}


/*
  Get number of occurrences of a word in a string
  Joel Olawanle
  20230407
  url https://stackabuse.com/javascript-how-to-count-the-number-of-substring-occurrences-in-a-string/
*/
function countOccurrences(str, word) {
  let regex = new RegExp(word, "gi");
  let count = (str.match(regex) || []).length;
  return count;
}
