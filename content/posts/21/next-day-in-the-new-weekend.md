+++
title = 'next day in the new weekend'
date = 2024-08-20T05:14:00+07:00
draft = false
math = true
tags = ['bytes-und-grains']
authors = ['viridi']
url = '2109'
+++
Continue to to build motivation for new weekend<!--more-->

It is now ~~0515~~ 0524 and this early morning about three hours ago the water container leake due to intermittens function of tank buoy. Two goals today are a user listed on [0003](../0003) and BRIN visit to FI, where the focus should be back to work on [graclussep2](https://github.com/dudung/graclussep2). The dean reminded me yesterday about habilitation for "the position". I should focus to the focus. Now it is 0530, update GitHub for this bug.

Review preview chat [606a3f82-eb9c-46d3-b132-f9483256600a](https://chatgpt.com/share/606a3f82-eb9c-46d3-b132-f9483256600a) about Modeling Grain Interactions.

New discussion with GPT-4o is [c5e425f9-1427-4dcc-9b00-e69b28b6f1b0](https://chatgpt.com/share/c5e425f9-1427-4dcc-9b00-e69b28b6f1b0), that some parts of it are given in preceeding sections.

## kernel function
A 2-d cubic spline kernel function is chosen as example

$$ \tag{1}
W(r, h) = \frac{\alpha_2}{h^2} \left\\{
\begin{array}{ll}
1 - \frac{3}{2}(\frac{r}{h})^2 + \frac{3}{4}(\frac{r}{h})^3, & 0 \le \frac{r}{h} < 1, \newline
\frac{1}{4}[2 - (\frac{r}{h})]^3, & 1 \le \frac{r}{h} < 2, \newline
0, & 2 \le \frac{r}{h}.
\end{array}
\right.
$$

where $\alpha_2 = \frac{10}{7\pi}$.


## density calculation
Density $\rho_i$ at particle $i$ whose position $\vec{r}_i$ is

$$ \tag{2}
\rho_i = \sum_j m_j W(r_{ij}, h)
$$

where $m_j$ is mass of a neighboring particle $j$, $W$ is kernel function, $r_{ij}$ is relative distance of particle $i$ from a neighboring particle $j$, and $h$ is a smoothing length.

that is computed by summing contribution from neighboring particles with the smoothing length $h$
