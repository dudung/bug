+++
title = 'js simple simulation simple counter'
date = 2024-08-24T05:26:00+07:00
draft = false
math = true
tags = ['js', 'simulation', 'physics']
authors = ['viridi']
url = '2111'
+++
Simple simulation using JS<!--more-->


## simple counter
{{< sim/togglecounter >}}
count 150 200
bttn1 Reset
bttn2 Start Stop
intms 100
{{< /sim/togglecounter >}}

Problem: Can not have multiple instances in one page (24-aug-2024).


## hugo post
```go
{{</* sim/togglecounter */>}}
count 150 200
bttn1 Reset
bttn2 Start Stop
intms 100
{{</* /sim/togglecounter */>}}

```


## shortcode
```html
{{ $intext := ( .Inner | chomp) }}
{{ $seed := "foo" }}
{{ $id := delimit (shuffle (split (md5 $seed) "" )) "" }}

<div id="{{ $id }}"></div>

<script>
let text = {{ $intext }};
let lines = text.split('\r\n');
lines.shift();

let dict = {};
for(l of lines) {
  let vals = l.split(" ");
  let key = vals.shift();
  dict[key] = vals;
}

let cmin = parseInt(dict["count"][0]);
let cmax = parseInt(dict["count"][1]);

let cap1 = dict["bttn1"][0];
let cap2a = dict["bttn2"][0];
let cap2b = dict["bttn2"][1];

let intms =  dict["intms"][0];
let cid = -1;

let btn1 = document.createElement("button");
btn1.innerHTML = cap1;
btn1.disabled = true;
btn1.addEventListener("click", resetCount);

let btn2 = document.createElement("button");
btn2.innerHTML = cap2a;
btn2.addEventListener("click", toggleStartStop);
btn2.style.marginLeft = "0.5em";

let count = document.createElement("span");
count.innerHTML = cmin;
count.style.paddingLeft = "0.5em";

let div = document.getElementById("{{ $id }}");
div.appendChild(btn1);
div.appendChild(btn2);
div.appendChild(count);

function resetCount(e) {
  let state = e.target.disabled;
  if(!state) {
    e.target.disabled = true;
    btn2.innerHTML = cap2a;
    count.innerHTML = cmin;
    btn2.disabled = false;
  }
}

function toggleStartStop(e) {
  let state = e.target.innerHTML;
  if(state == cap2a) {
    e.target.innerHTML = cap2b;
    btn1.disabled = true;
    cid = setInterval(counting, intms);
  } else {
    e.target.innerHTML = cap2a;
    btn1.disabled = false;
    clearInterval(cid);
  }
}


function counting() {
  let c = parseInt(count.innerHTML);
  c += 1;
  count.innerHTML = c;
  
  if(c >= cmax) {
    clearInterval(cid);
    btn1.disabled = false;
    btn2.innerHTML = cap2a;
    btn2.disabled = true;
  }
}

</script>
</div>
```
