+++
title = 'js textarea i/o button copy'
date = 2024-08-26T16:32:00+07:00
draft = false
math = true
tags = ['shortcode']
authors = ['viridi']
url = '2114'
+++
Textarea with label and button to copy content from other textarea<!--more-->


## textarea
+ {{< sim/textareain id="taIn" width="120" height="80" >}}
MASS 2
VOLUME 5
{{< /sim/textareain >}}
+ {{< sim/textareaout id="taOut" width="120" height="80" >}}
{{< /sim/textareaout >}}
+ {{< sim/buttonproc id="btnProc" in="taIn" out="taOut" caption="Copy" >}}


## hugo post
```go
{{</* sim/textareain id="taIn" width="120" height="80" */>}}
MASS 2
VOLUME 5
{{</* /sim/textareain */>}}
```

```go
{{</* sim/textareaout id="taOut" width="120" height="80" */>}}
{{</* /sim/textareaout */>}}
```

```go
{{</* sim/buttonproc id="btnProc" in="taIn" out="taOut" caption="Copy" */>}}
```

## shortcode
```html
{{ $seed := "foo" }}
{{ $rid := delimit (shuffle (split (md5 $seed) "" )) "" }}

{{ $id := default $rid (.Get "id") }}
{{ $w := default "100" (.Get "width") }}
{{ $h := default "300" (.Get "height") }}
{{ $l := default "Input" (.Get "caption") }}
{{ $r := ( .Inner | chomp ) }}

<div>
<span style="display: block;">{{ $l }}</span>
<textarea
  style="width: {{ $w }}px;
    height: {{ $h }}px;
    margin: 0 auto;
   overflow-Y: scroll;"
  id="{{ $id }}"></textarea>
</div>

<script src="{{ .Site.BaseURL }}/js/text.js"></script>

<script>
writeToTextarea("{{ $id }}", {{ $r }});
</script>
```

```html
{{ $seed := "foo" }}
{{ $rid := delimit (shuffle (split (md5 $seed) "" )) "" }}

{{ $id := default $rid (.Get "id") }}
{{ $w := default "100" (.Get "width") }}
{{ $h := default "300" (.Get "height") }}
{{ $l := default "Output" (.Get "caption") }}
{{ $r := ( .Inner | chomp ) }}

<div>
<span style="display: block;">{{ $l }}</span>
<textarea
  style="width: {{ $w }}px;
    height: {{ $h }}px;
    margin: 0 auto;
    overflow-Y: scroll;"
  readonly
  id="{{ $id }}"></textarea>
</div>

<script src="{{ .Site.BaseURL }}/js/text.js"></script>
```

```html
{{ $seed := "foo" }}
{{ $rid := delimit (shuffle (split (md5 $seed) "" )) "" }}

{{ $id := default $rid (.Get "id") }}
{{ $in := default "input" (.Get "in") }}
{{ $out := default "output" (.Get "out") }}
{{ $l := default "Process" (.Get "caption") }}

<div>
<button id="{{ $id }}" onclick="copy('{{ $in }}', '{{ $out }}');">{{ $l }}</button>
</div>

<script src="{{ .Site.BaseURL }}/js/text.js"></script>
<script src="{{ .Site.BaseURL }}/js/process.js"></script>
<script>
function copy(src, dest) {
    writeToTextarea(dest, readFromTextarea(src));
}
</script>
```



## javascript
```js
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
```


## todo
- Create function to process input to output more than just copy.
