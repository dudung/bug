+++
title = 'lazy weekend'
date = 2024-08-18T06:14:00+07:00
draft = false
math = true
tags = ['bytes-und-grains']
authors = ['viridi']
url = '2107'
+++
To keep decayed motivation still exists<!--more-->

Actually I do not know what to write for `bug`. It is a common weekend where usually the inertia is at its biggest value. It requires some special forces to move from relaxing state to dynamic, moving state. This state is very uncomfortable, since I can not take a full rest for recovering but also can not think to continue some unfinished works. It seems that the processor has a blank state, where it can only process necessary activities only for surviving, but not for further stage than that.

I just let the finggers dance on the computer keyboard and the words flow not so meaningful. At least there are some quantity of thoughts but do not say about the quality.

Read books, write codes, derive equations, watch movies, work in the garden, and walk around track or neighborhood are some that I like to do, but not today. I just want to sleep and then to fresh for Monday routines. This writing is one of the way to get tired, so I can sleep with quality of recovery. I hope it works.

It is a one way writing flow without correction. Now is 0626 and there are only 1 min read. I do not know when it reaches 2 min read. It does right away, 0627 now. So it is getting better.

Suppose that motivation $M_t$ for today $t$ can be defined as

$$\tag{1}
M_t = f(A_t, A_{t-1}, A_{t-2}, .., {\bf X}), 
$$

which depends on today activity $A_t$ and previous ones $A_{t-1}$, $A_{t-2}$, .., and also some other factors stored in $\bf X $. The previous activitis $A_{t-1}$, $A_{t-2}$, .., contribute to current remaining energy in the agent to perform today activity $A_t$. The Energy depends on the supply $S$ and the use $U$

$$\tag{2}
E_t = E_{t-1} + S_t - A_t + R_t.
$$

For simplicity it does not count hourly activities, which can be more complex. Then the model can be used only in the morning to predict the whole day motivation. It is also assumed that the motivation does not decay in the day.

Now it is 0646 and pause for nasi goreng cooked by jonja-sama and it is still 2 min read. Now it is 0700 and start again the non-sense writing and it is still 2 min read.

Equation (2) can be modified with parameters to weight the terms as follow

$$\tag{3}
E_t = a E_{t-1} + b S_t - c A_t + d R_t,
$$

since each term might not be proportional to each other. With parameters $a$, $b$, and $c$ the value $S_t$, $A_t$, and $R_t$ can be now just count of the terms. By the way it is now 3 min read at 0704. Update GitHub for this post.

Or the term $S_t$ can be described in details

$$\tag{4}
S_t = \sum_i a_i F_i,
$$

where $a_i$ is portion or energy of food $F_i$, e.g. in kkal as given in the food packages. Then unit of $a_i$ should be $\rm J/kcal$. And for rest or relaxing $R_t$ it can be

$$\tag{5}
R_t = \sum_i d_i R_i,
$$

where $R_i$ in $\rm hours$ and $d_i$ is quality of the activity, which has unit of $\rm J/hours$. The total normal value of $R_i$ about $8 \rm hours$ for normal activities in previous days or more if the activities are so intense.

It is now 0711 and die Alte not yet come back after mitbringen die Junge to ID championship on the Three. There are Sunday street market and CFD rerouting the common path from home to the destination.

Back to Equations (4) and (5) it seems that the details should have relation with the accumation parameter but not the same. Equation (5) is clear that they are related, but same symbols could lead to confusion, while Equation (4) is clear that not the same, but it is hard to relat $F_i$ to $S_t$. And the lower index $t$ for time and $i$ for detail component might also introduce confusion.

It is 0716 and already 4 min read. Update GitHub.

For energy supply or $S$ since human can only obtain it from food than the term food or other alternatives must be considered. Some terms that cross my mind are as follow.

Symbol | Meanining | Candidates | Unit
:- | :- | :- | :-
S | Energy supply | energy sources | J
(?) | Element of energy sources | Food, Events (Breakfast, morning coffee, lunch, afternoon break, dinner, etc), .. | J/kkal

I can not think right away. The purpose just to write something became too serious and exhausted. Perhaps it is not a way to relax in the weekend? I am sure anymore. Die Alte is still on the way. Bauchschmerzen, not yet ka air. From Saparua first. It is now 0732 after communcating via WA.

Take rest with reading manga is that I want to do right now, but until it is a 4 mins read post first and not yet. Keep on writing, even it is not so important to write. Quantity over quality. Too bad to be in such stage in the weeken. Usually it is golden time to work on something.

Finally it is a 5 mins read one. Now it is 0734. Update GitHub for this post.
