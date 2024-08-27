+++
title = 'in-proc-out flowchart examples'
date = 2024-08-26T19:39:00+07:00
draft = false
math = true
tags = ['flowchart']
authors = ['viridi']
url = '2115'
+++
List of common flowchart symbols<!--more-->

There are at least 5+1 symbols used as common flowchart symbols, which are oval, rectangle, arrow, diamond, parallelogram, and plus circle [^ramuthi_2024], where the first is more to rectangle with rounded corners with some names, e.g. stadium, capsule, or pill [^abhimanyu_2018]. Beside flowchart, there is an alternative known as algorithm, where both are tools to visualize the solution of a problem in computer programming and they differ from each other [^thakur_2023]. Flowchart can also be made using code, e.g. Mermaid [^viridi_2024]. Here examples of flowchart that only using input, process, and output symbols are given using Mermaid.


## addition of two numbers
{{< mermaid >}}
flowchart LR
  B --> I --> P --> O --> E
  B(["Begin"])
  I[/"Read x, y"/]
  P["z = x + y"]
  O[/"Display z"/]
  E(["End"])
{{< /mermaid >}}

```
{{</* mermaid */>}}
flowchart LR
  B --> I --> P --> O --> E
  B(["Begin"])
  I[/"Read x, y"/]
  P["z = x + y"]
  O[/"Display z"/]
  E(["End"])
{{</* /mermaid */>}}
```


## subtraction of two numbers
{{< mermaid >}}
flowchart LR
  B --> I --> P --> O --> E
  B(["Begin"])
  I[/"Read x, y"/]
  P["z = x &mdash; y"]
  O[/"Display z"/]
  E(["End"])
{{< /mermaid >}}

```
{{</* mermaid */>}}
flowchart LR
  B --> I --> P --> O --> E
  B(["Begin"])
  I[/"Read x, y"/]
  P["z = x &mdash; y"]
  O[/"Display z"/]
  E(["End"])
{{</* /mermaid */>}}
```


## multiplication of two numbers
{{< mermaid >}}
flowchart LR
  B --> I --> P --> O --> E
  B(["Begin"])
  I[/"Read x, y"/]
  P["z = x &times; y"]
  O[/"Display z"/]
  E(["End"])
{{< /mermaid >}}

```
{{</* mermaid */>}}
flowchart LR
  B --> I --> P --> O --> E
  B(["Begin"])
  I[/"Read x, y"/]
  P["z = x &times; y"]
  O[/"Display z"/]
  E(["End"])
{{</* /mermaid */>}}
```


## division of two numbers
{{< mermaid >}}
flowchart LR
  B --> I --> P --> O --> E
  B(["Begin"])
  I[/"Read x, y"/]
  P["z = x / y"]
  O[/"Display z"/]
  E(["End"])
{{< /mermaid >}}

```
{{</* mermaid */>}}
flowchart LR
  B --> I --> P --> O --> E
  B(["Begin"])
  I[/"Read x, y"/]
  P["z = x / y"]
  O[/"Display z"/]
  E(["End"])
{{</* /mermaid */>}}
```


## difference of squares
There is a relation

$$\tag{1}
a^2 - b^2 = (a + b)(a - b)
$$

known as difference of squares [^stapel_2012].

{{< mermaid >}}
flowchart LR
  B --> I --> P1 --> P2 --> P3 --> O --> E
  B(["Begin"])
  I[/"Read a, b"/]
  P1["c = a + b"]
  P2["d = a &mdash; b"]
  P3["e = c &times; d"]
  O[/"Display e"/]
  E(["End"])
{{< /mermaid >}}

```
{{</* mermaid */>}}
flowchart LR
  B --> I --> P1 --> P2 --> P3 --> O --> E
  B(["Begin"])
  I[/"Read a, b"/]
  P1["c = a + b"]
  P2["d = a &mdash; b"]
  P3["e = c &times; d"]
  O[/"Display e"/]
  E(["End"])
{{</* /mermaid */>}}
```

Above example using three process symbols, `P1`, `P2`, `P3`, that actually can be merged into single `P`, but they are displayed separated for clearer meaning.


## other examples
Infinite number of examples using only input, process, and output symbols can be made. Following are other examples.

+ Calculate area of rectangle, square, parallelogram, trapezium, trapezoid, diamond, kite, etc.
+ Calculate density from mass and volume of various geometrical froms.
+ Calculate percentage.


## refs
[^abhimanyu_2018]: Abhimanyu, Glorfindel, "What is this shape that looks like a rectangle with rounded ends called?", Graphic Design Stack Exchange, 14 Nov 2018, url https://graphicdesign.stackexchange.com/q/117005/196920 [20240826].
[^ramuthi_2024]: Danesh Ramuthi, "Flowchart Symbols and Meaning: A Complete Guide (2024)", Venngage, 29 Feb 2024, url https://venngage.com/blog/flowchart-symbols/ [20240826].
[^stapel_2012]: Elizabeth Stapel, "Special Factoring: Differences of Squares", Purplemath, May 2012, url https://www.purplemath.com/modules/specfact.htm [20240826].
[^thakur_2023]: Shreeya Thakur, "Difference Between Algorithm And Flowchart - Explained!", Unstop, 22 Nov 2023, url https://unstop.com/blog/difference-between-algorithm-and-flowchart [20240826].
[^viridi_2024]: Sparisoma Viridi, "flowchart and mermaid", bytes-and-grains, 6 Apr 2024, url https://dudung.github.io/bug/2002/ [20240826].
