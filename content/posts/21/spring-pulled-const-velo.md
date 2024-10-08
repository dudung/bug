+++
title = 'spring pulled const velo'
date = 2024-10-08T10:58:00+07:00
draft = false
math = true
tags = ['spring-mass']
authors = ['viridi']
url = '2135'
+++
A working note for system of two masses and one spring pulled with constant velocity<!--more-->

A mass $m_i$ connected with mass $m_j$ via a spring with constant $k_{ij}$ and normal length $l_{ij}$. Position of $m_i$ relative to $m_j$ is

$$\tag{1}
x_{ij} = x_i - x_j
$$

and the distance between mass $m_i$ and $m_j$ is

$$\tag{2}
r_{ij} = \sqrt{(x_i - x_j)^2}.
$$

Notice that $r_{ij}$ is always positive, while $x_{ij}$ can be positive or negative.

Spring force on $m_i$ due to $m_j$ is

$$\tag{3}
S_{ij} = -k_{ij}(r_{ij} - l_{ij}) u_{ij},
$$

where the unit vector is simple

$$\tag{4}
u_{ij} = \frac{x_i - x_j}{r_{ij}}.
$$

Eqns (2) and (4) can be extended from this 1-d system to 2-d and 3-d systems.
