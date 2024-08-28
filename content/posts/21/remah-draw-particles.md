+++
title = 'remah draw particles'
date = 2024-08-27T06:57:00+07:00
draft = false
math = true
tags = ['shortcode', 'remah']
authors = ['viridi']
url = '2117'
+++
A 2nd app of [`remah`](https://github.com/dudung/remah) on a Hugo post<!--more-->


## input
{{< sim/textareain id="inParticle" width="200" height="120" caption="Particles" >}}
00 1.0 1.0 0.0 0.50 #f00
01 1.0 2.0 0.0 0.25 #0f0
02 2.0 2.0 0.0 0.50 #00f
03 2.0 1.0 0.0 0.25 #f0f 
{{< /sim/textareain >}}

It uses previous `textareain` shortcode [^viridi_2024], but with more complex task than only `copy()`, where

```go
{{</* sim/textareain id="inParticle" width="200" height="120" caption="Particles" */>}}
00 1.0 1.0 0.0 0.50 #f00
01 1.0 2.0 0.0 0.25 #0f0
02 2.0 2.0 0.0 0.50 #00f
03 2.0 1.0 0.0 0.25 #f0f 
{{</* /sim/textareain */>}}
```

is the code.


## others
+ Not so related, but involving LLM is tempted, but it might have risk that must be considered [^ladkin_2023]. &Uuml;brigens, die Info kommt von I. M. Wiryana (UG).
+ One of our works is published [^tistomo_2024] and can now be accessed online without subscription via https://rdcu.be/dSbR5.


## refs
[^ladkin_2023]: Peter Bernard Ladkin, "Involving LLMs in legal processes is risky", Digital Evidence and Electronic Signature Law Review, vol 20, p 40-46, 2023, url https://doi.org/10.14296/deeslr.v20i.5610.
[^tistomo_2024]: Arfan Sindhu Tistomo, Aditya Achmadi, Melati Azizka Fajria, Sri Ningsih Yazana Pakpahan, Arlan, Mareta Dwi Anastasya, Kelvin Sapta Dewantara, Muhammad Azzumar, Yonan Prihhapso, Gigin Ginanjar, Sparisoma Viridi, Muhammad Miftahul Munir, Suprijadi, "Development of A Simple 1-T Dew-Point Generator", International Journal of Thermophysics, vol 45, n -, p 126, Aug 2024, url https://doi.org/10.1007/s10765-024-03420-5.
[^viridi_2024]: Sparisoma Viridi, "js textarea i/o button copy". bytes-und-grains, 26 Aug 2024, url https://dudung.github.io/bug/2114/ [20240826].
