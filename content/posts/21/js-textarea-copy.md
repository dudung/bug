+++
title = 'js textarea copy'
date = 2024-08-26T09:01:00+07:00
draft = false
math = true
tags = ['shortcode']
authors = ['viridi']
url = '2113'
+++
Simple textarea copy content from other textarea<!--more-->


## simple textarea
+ As input
{{< sim/textarea id="taIn" width="200" height="100" >}}
MASS 2
FORCE 5
VEL -1
POS 4
{{< /sim/textarea >}}
+ As 1st output copied from input
{{< sim/textareacopy id="taOut" src="taIn" width="200" height="100" >}}
{{< /sim/textareacopy >}}
+ As 2nd output copied from 1st output
{{< sim/textareacopy id="taOut2" src="taOut" width="200" height="100" >}}
{{< /sim/textareacopy >}}

Feature: It can already have multiple instances and copy in chained.


## hugo post
```go
{{</* sim/textarea id="taIn" width="200" height="100" */>}}
MASS 2
FORCE 5
VEL -1
POS 4
{{</* /sim/textarea */>}}

{{</* sim/textareacopy id="taOut" src="taIn" width="200" height="100" */>}}
{{</* /sim/textareacopy */>}}

{{</* sim/textareacopy id="taOut2" src="taOut" width="200" height="100" */>}}
{{</* /sim/textareacopy */>}}
```

## shortcode
```html
{{ $seed := "foo" }}
{{ $rid := delimit (shuffle (split (md5 $seed) "" )) "" }}

{{ $id := default $rid (.Get "id") }}
{{ $src := default "taIn" (.Get "src") }}
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
writeToTextarea("{{ $id }}", readFromTextarea("{{ $src }}"));
</script>
```


## javascript
```js
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
```


## todo
- Add button to initiate the copy process after the source textarea modified.
