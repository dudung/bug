+++
title = 'half-life with forward fd'
date = 2024-08-30T21:47:00+07:00
draft = false
math = true
tags = ['finite difference', 'half-life']
authors = ['viridi']
url = '2118'
+++
Forward finite difference formula to obtain consistent half-life<!--more-->

Half-life refers to time required for a given quantity to decrease from its initial value to half [^bashyal_2023]. This concept plays important role in understanding the decay or radioactive substances in nuclear physics and it is also used by scientists to measure age of ancient artifacts through carbon dating [^simon_2024]. In a first order reaction the half-life unrestrained by the concentration of the reactant, but the half-lives of reactions with other orders hang on the concentrations of the reactants at the same time [^turito_2022]. While solving the equation in discrete form, e.g. using Finite Difference (FD) method [^yew_2011], chosen time step $\Delta t$ will influence the quantity, which does not match the half-time. One way to overcome the problem is given here in brief.


## derivation
..


## refs
[^bashyal_2023]: Jyoti Bashyal, "Half-life Formula: Derivation, Application, Examples", Science Info, 13 Jun 2023, url https://scienceinfo.com/half-life-formula-derivation/ [20240830].
[^simon_2024]: Yara Simón, "Half-Life Formula: Components and Applications", HowStuffWorks, 14 Feb 2024, url https://science.howstuffworks.com/half-life-formula.htm [20240830].
[^turito_2022]: Turito Team USA, "Half-Life : Definition, Formula, Derivation (Zero & First-Order)", Turito, 5 Sep 2022, url https://www.turito.com/blog/chemistry/half-life [20240830].
[^yew_2011]: Alice C. Yew, "Numerical differentiation: finite differences", Applied Mathematics, Brown University, 22 Apr 2011, url https://www.dam.brown.edu/people/alcyew/handouts/numdiff.pdf [20240830].
