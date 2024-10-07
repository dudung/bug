+++
title = 'system 2-mass 1-spring 1-d'
date = 2024-10-07T08:04:00+07:00
draft = false
math = true
tags = ['spring-mass']
authors = ['viridi']
url = '2132'
+++
System of two mass and one spring<!--more-->

Two frictionless and free moving masses connected by a spring will have two natural frequencies, where one is zero [^centauri_2016]. The system can be considered as similar system with two springs [^hallauer_2022], but with the second spring is unattached to a fix point. Simpler system with only one mass but with massful spring is still interesting to study [^cushing_1984].

Here the formulation for a system consist of 2 masses $m_1$, $m_2$ and 1 spring with constant $k$ is given.

Mass $m_i$ is located at $x_i$ with $i = 1, 2$, where $x_1 < x_2$. Normal length of the spring is $l_0$. Force on each mass are

$$\tag{1}
F_{k,1} = k[ (x_2 - x_1) - l_0 ]
$$

and

$$\tag{2}
F_{k,2} = -k[ (x_2 - x_1) - l_0 ].
$$

Using Newton's second law of motion will turn Eqns (1) and (2) into

$$\tag{3}
m_1 \frac{d^2 x_1}{dt^2} = k[ (x_2 - x_1) - l_0 ]
$$

and

$$\tag{4}
m_2 \frac{d^2 x_2}{dt^2} =  -k[ (x_2 - x_1) - l_0 ].
$$

Sum of Eqns (3) and (4) gives

$$\tag{5}
\frac{d^2 X_{\rm com}}{dt^2} = 0,
$$

with

$$\tag{6}
X_{\rm com} = \frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}
$$

is system center of mass.

Multiply Eqn (3) with $m_2$ and Eqn (4) with $m_1$ will produce

$$\tag{7}
m_1 m_2 \frac{d^2 x_1}{dt^2} = k m_2 [ (x_2 - x_1) - l_0 ]
$$

and

$$\tag{8}
m_1 m_2 \frac{d^2 x_2}{dt^2} =  - k m_1[ (x_2 - x_1) - l_0 ].
$$


Substract Eqn (4) with Eqn (3) will give an equation.


[^centauri_2016]: Alfred Centauri, "Two mass one-spring system natural frequency", Physics Stack Exchange, 6 May 2016, url https://physics.stackexchange.com/q/254412 [20241007].
[^cushing_1984]: James T. Cushing, "", American Journal of Physics, vol 53, no 10, p 925-933, Oct 1984, url https://doi.org/10.1119/1.13796.
[^hallauer_2022]: William L. Hallauer Jr., "Undamped Two-Mass-Two-Spring System" in Introduction to Linear Time-Invariant Dynamic Systems for Students of Engineering, Virginia Polytechnic Institute and State University, 23 May 2022, url https://eng.libretexts.org/@go/page/7699 [20241007].
 