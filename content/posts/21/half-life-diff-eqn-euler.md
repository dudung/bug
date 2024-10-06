+++
title = 'half-life diff eqn euler'
date = 2024-10-05T17:06:00+07:00
draft = false
math = true
tags = ['radioactivity', 'half-life', 'euler']
authors = ['viridi']
url = '2127'
etc = ['72329944', 'https://websiteage.org/']
+++
Relation between half-life and time step<!--more-->

Some examples of first order differential equations are mechanical systems, electrical circuits, population models, Newton's law of cooling, and compartemental analysis [^drakos_1966].
Solution of a differential equation can be approximated using many methods, where one of the oldest and easiest to use is Euler's method [^dawkins_2022]. As analytical solution, the exponential function is used for investigating temperature of heated objects, population growth and radioactive decay [^foster-greenwood_2011]. In radioactive decay a useful measurement point is the time take for half of the initial amount of material do decay, which is known as half-life [^robbins_2021]. Certain model of population growth and radioactive decay share similar differential equations, which also have similar solution.

When solving differential equation of radioactive decay with numerical approach, which is Euler method ini this case, the half-life will depend on the chosen time step. In order to obtain the right time step, a coefficient is required, where its value relates to time step value.

Suppose that a half-life $T_\frac12$ is defined, than the decay constant would be

from [half-life and decay constant](../2128) relation.

$$\tag{1}
\lambda = \frac{\ln 2}{T_\frac12}.
$$

Since Euler method is derived from the simple forward difference expression [], 

[^]: "Forward Euler method", url https://math.libretexts.org/Bookshelves/Differential_Equations/Numerically_Solving_Ordinary_Differential_Equations_(Brorson)/01%3A_Chapters/1.02%3A_Forward_Euler_method [20241006].

[^dawkins_2022]: Paul Dawkins, "Euler's Method", 16 Nov 2022, url https://tutorial.math.lamar.edu/classes/de/eulersmethod.aspx [20241005].
[^drakos_1966]: Nikos Drakos (converter), "Examples of First-Order Differential Equations",  Department of Mathematics, Oregon State University, 5 Feb 1996, url https://sites.science.oregonstate.edu/math/home/programs/undergrad/CalculusQuestStudyGuides/ode/first/examples/examples.html [20241005].
[^foster-greenwood_2011]: Briana Foster-Greenwood, "Exponential Functions: Population Growth, Radioactive Decay, and More", Math 1650.002 (Precalculus), 14 Oct 2011, url https://sites.math.unt.edu/~baf0018/courses/handouts/exponentialnotes.pdf [20241005].
[^robbins_2021]: Chris Robbins, "Physical, biological and effective half-life", Ionactive, 29 Sep 2021, url https://ionactive.co.uk/resource-hub/guidance/physical-biological-and-effective-half-life [20241005].
