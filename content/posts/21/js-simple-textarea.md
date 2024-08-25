+++
title = 'js simple textarea'
date = 2024-08-25T17:50:00+07:00
draft = false
math = true
tags = ['shortcode']
authors = ['viridi']
url = '2112'
+++
Simple textarea for simulation input<!--more-->


## simple textarea
{{< sim/textarea id="ta0" width="200" height="100" >}}
MASS 1.5
VOLU 1.25
{{< /sim/textarea >}}

{{< sim/textarea id="ta1" width="200" height="100" >}}
ACC 0.5
VEL -7.5
POS 10
{{< /sim/textarea >}}


## hugo post
```go
{{</* sim/textarea id="ta0" width="200" height="100" */>}}
MASS 1.5
VOLU 1.25
{{</* /sim/textarea */>}}

{{</* sim/textarea id="ta1" width="200" height="100" */>}}
ACC 0.5
VEL -7.5
POS 10
{{</* /sim/textarea */>}}
```

## shortcode
```html
{{ $seed := "foo" }}
{{ $rid := delimit (shuffle (split (md5 $seed) "" )) "" }}

{{ $id := default $rid (.Get "id") }}
{{ $w := default "100" (.Get "width") }}
{{ $h := default "300" (.Get "height") }}
{{ $r := ( .Inner | chomp ) }}

<div>
<textarea id="{{ $id }}"
 style="width: {{ $w }}px;
        height: {{ $h }}px;
        margin: 0 auto;
        overflow-Y: scroll;"
>
</textarea>
</div>

<script src="{{ .Site.BaseURL }}/js/text.js"></script>

<script>
writeToTextarea("{{ $id }}", {{ $r }});
</script>
```


## javascript
```js
/*
  text.js
  Some functions for text manipulation
  
  Sparisoma Viridi | https://github.com/dudung
  
  20240825 Start this collection of functions
  + countOccurrences(str, word) -- Joel Olawanle
  + getEOLChar(text) -- Sparisoma Viridi
  + writeToTextarea(id, content) -- Sparisoma Viridi
*/


/*
  Write text to a textarea with id
  Sparisoma Viridi
  20240825
*/
function writeToTextarea(id, content) {
  let eol = getEOLChar(content);
  let el = document.getElementById(id);
  let lines = content.split(eol);
  if(lines[0] == "") lines.shift();
  let text = lines.join("\n");
  el.value = text;
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
```


## todo
- Consider to put visible label indicating id for textarea.
- Design shortcode to read from available textarea elements in the same page.
