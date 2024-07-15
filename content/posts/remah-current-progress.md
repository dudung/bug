+++
title = 'remah current progress'
date = 2024-07-16T04:19:00+07:00
draft = false
math = true
tags = ['remah', 'capstone']
authors = ['viridi']
+++
Current progress of remah: A ambitious JavaScript and Python project<!--more-->

It was June 29th, 2024 or about two weeks ago, when the v0.0.0 of remah is released [^remah_0.0.0].


## js and python
The goals to use two languanges, JavaScript and Python, are
+ easy visualization while searching working parameters using JavaScript,
+ better calculation performance with right parameters using Python,
+ not-so-difficult change from JavaScript to Phython.

After defining above goals they, the first two at leas, are confirmed by GPT-4o [^GPT-4o_2024].


## files and folders
It has following folder structure, where the files are placed

```
M:\REMAH
│   .gitignore
│   cmd.lnk
│   LICENSE
│   README.md
│   setup.py
│
├───.github
│   └───workflows
│           python-publish.yml
│
├───docs
│       action.md
│       folder.md
│
├───src
│   └───remah
│       ├───js
│       │   ├───apps
│       │   │       pogd-sad-ui.js
│       │   │       pogd.js
│       │   │       README.md
│       │   │       sad.js
│       │   │
│       │   ├───archive
│       │   │   │   README.md
│       │   │   │
│       │   │   └───apps
│       │   │           mma.js
│       │   │           README.md
│       │   │
│       │   ├───configs
│       │   │       particle-grid.js
│       │   │       README.md
│       │   │
│       │   ├───layouts
│       │   │       layout-sad.js
│       │   │       README.md
│       │   │
│       │   └───utils
│       │           create-elements.js
│       │           draw-matrix.js
│       │           move-elements.js
│       │           README.md
│       │
│       └───python
│           │   info.py
│           │   __init__.py
│           │
│           └───remah.egg-info
│                   dependency_links.txt
│                   PKG-INFO
│                   SOURCES.txt
│                   top_level.txt
│
└───tests
    ├───js
    │   │   index.html
    │   │
    │   ├───apps
    │   │       test-pogd-sad-ui.js
    │   │       test-pogd.js
    │   │
    │   ├───configs
    │   │       test-create-zero-matrix.js
    │   │       test-particle-grid.js
    │   │       test-position-matrix-from-config.js
    │   │
    │   ├───layouts
    │   │       test-layout-sad.js
    │   │
    │   └───utils
    │           test-animate-moving-button.js
    │           test-create-button.js
    │           test-create-canvas.js
    │           test-create-textarea.js
    │           test-create-toggle-button.js
    │           test-draw-matrix-bw.js
    │
    └───python
            test_info.py
            __init__.py
            
```

Two main folders are `src` and `tests` where both JavaScript and Python are placed under `js` and `python` folders, respectively. 


## notes
[^remah_0.0.0]: Sparisoma Viridi, "Remah: Mixed modeling approaches, v0.0.0", GitHub, 29 Jun 2024, url https://github.com/dudung/remah/releases/tag/v0.0.0 [20240716].
[^GPT-4o_2024]: GPT-4o, Sparisoma Viridi, "JavaScript vs Python Simulation", ChatGPT, 16 Jul 2024, url https://chatgpt.com/share/054672b4-6e80-4edc-8f60-6d04c257d948 [20240716].
