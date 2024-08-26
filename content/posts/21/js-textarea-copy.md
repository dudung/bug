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
+ As 1st output
{{< sim/textareacopy id="taOut" src="taIn" width="200" height="100" >}}
{{< /sim/textareacopy >}}
+ As 2nd output From 1st output
{{< sim/textareacopy id="taOut2" src="taOut" width="200" height="100" >}}
{{< /sim/textareacopy >}}

## hugo post
```go
```

## shortcode
```html
```


## javascript
```js
```


## todo
- ..
