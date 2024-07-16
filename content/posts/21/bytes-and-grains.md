+++
title = 'bytes and grains'
date = 2024-07-06T19:38:00+07:00
draft = false
math = true
tags = ['bytes-und-grains']
authors = ['viridi']
url = '2100'
+++
Bytes and grains: Create a Hugo-based blog hosted on GitHub<!--more-->

> Illustrated version of this post is available on https://medium.com/p/ddc85a338626 (6 Jul 2024).

I just try to recreate my previous blog on GitHub and document the steps here. If you want the details how to create the blog from the beginning just jump to the last part of this story, where I put some blog article about it.


## the name
Well honestly, I struggle to obtain the name.

There are some blogs created previously, which also sourced from GitHub, but confused and undetermined names, e.g. [algo](https://github.com/dudung/algo), [blank](https://dudung.github.io/blank/), [blog](https://dudung.github.io/blog/), [bugs](https://dudung.github.io/bugs/), [bugx](https://dudung.github.io/bugx/), [bugx — on Vercel](https://bugx.vercel.app/), [butir](https://dudung.github.io/butir/), [einfachee-ideen](https://github.com/dudung/einfache-ideen), [eqnphys](https://github.com/dudung/eqnphys), [equation](https://github.com/dudung/equation), [expansion-model](https://github.com/dudung/expansion-model), [git-journal](https://github.com/dudung/git-journal), [idee](https://github.com/dudung/idee), [item](https://dudung.github.io/item/), [kuno](https://github.com/dudung/kuno), [lecture-notes](https://dudung.github.io/lecture-notes/), [moparc](https://github.com/dudung/moparc), [note](https://dudung.github.io/note/), [notes](https://github.com/dudung/notes), [nou](https://dudung.github.io/nou/), [o](https://dudung.github.io/o/), [odone](https://github.com/dudung/odone), [poem](https://github.com/dudung/poem), [ptext](https://dudung.github.io/ptext/), [s](https://dudung.github.io/s/), [slidex](https://github.com/dudung/slidex), [snippet](https://github.com/dudung/snippet), [soal](https://dudung.github.io/soal/), [teks](https://github.com/dudung/teks), [test](https://dudung.github.io/test/), [to](https://dudung.github.io/to/), [unegx](https://github.com/dudung/unegx), [x](https://dudung.github.io/x/), [xeqn](https://github.com/dudung/xeqn), and also others not related to GitHub as listed [here](https://dudung.github.io/text).

Then, I ask GPT-4o for advice and it suggests Bytes and Grains [^gpt4o_2024].


## prerequisites
It is assumed that
+ you have a GitHub account or able to create one [^Viridi_2023a] and know the basic of creating a repository [^Viridi_2023b],
+ you have installed Git on Windows or know how to do it [^Viridi_2023c],
+ you have installed Hugo or know how to download and install it [^Viridi_2023d].


## new repository
A new repository name bytes-and-grains will be created.
- First visit your GitHub user profile, where in my case is https://github.com/dudung.
- Click on + symbol near top right corner, under the address bar.
- Choose New repository.
- Type on Repository name bytes-and-grains as the name and GitHub have shown that the name is available. Continue with filling the Description.
- Let the Public option chosen, then check Add a README file.
- Choose a license, select any license suits you purpose.
- Click Create repository button, the green one on the right bottom.
- Wait for the repository creating process.
- It will show the created repository.

The repository is now available on https://github.com/dudung/bytes-and-grains.


## repository clone
To clone remote repository, do following steps
- Open a folder or in my case a drive M:\.
- Use mouse right click to open Git Bash.
- Clone the repository.
- Now there is new folder bytes-and-grains created on M:\, where there are only two files inside the folder.
- Create .gitignore file with following content
  ```
  # shortcuts
  cmd.lnk

  # folders
  public
  ```
- And then create the shortcut to cmd or Windows Command Prompt. Now, there are two additional files in the folder.
- Perform git add, commit, and push in the Git Bash. Now the additional file, `.gitignore` has been added to remote repository as shown below.

It shows that LICENSE and README.md are created earlier than .gitignore, which is just created.


## settings copy and modification
Visit https://github.com/dudung/s to copy some settings.

- Download all files and folder, but the `LICENSE`, `README.md` and `.gitignore` files, and ignore also `.github` folder.
- Open `content` folder.
- Open `posts` folder and delete all files but one, which is renamed to `bytes-and-grains.md` as the first post.
- Edit it and change its content as follow.
  ```md
  +++
  title = 'bytes and grains'
  date = 2024-07-06T19:38:00+07:00
  draft = false
  math = true
  tags = ['bytes-and-grains']
  authors = ['viridi']
  +++
  Bytes and grains: Create a Hugo-based blog hosted on GitHub<!--more-->
  ```
  It will be the first post for this repository.
- Open `hugo.toml` and modify it as follow.
  ```toml
  baseURL = 'https://dudung.github.io/bytes-and-grains'
  languageCode = 'en-us'
  title = 'bytes-and-grains'
  theme = 'default'

  enableEmoji = true

  #disableKinds = ["taxonomyTerm"]

  [taxonomies]
    author = "authors"
    tag = "tags"
    category = "categories"


  [[menu.main]]
    name = 'Home'
    weight = 1
    identifier = 'home'
    url = '/'
  ```
- Modify also `layouts\index.html` as below.
  ```html
  {{ define "main" }}
    <main aria-role="main">
      <header class="homepage-header">
        <h1>from codes to granular systems</h1>
        {{ with .Params.subtitle }}
          <span class="subtitle">{{ . }}</span>
        {{ end }}
      </header>
      <div class="homepage-content">
        <!-- Note that the content for index.html, as a sort of list page, will pull from content/_index.md -->
        {{ .Content }}
      </div>
      
      {{ $max := len .Site.RegularPages }}
      {{ $index :=  sub $max 1 }}
      
      {{ range sort .Site.RegularPages ".Params.url" "desc" }}
          <code>
            <x style="color: #aaa;">{{ .Params.url }}</x>
            {{/* .{{ printf "%04d" $index */}}
            {{ dateFormat "02-Jan-2006" .Date }}
          </code>
          <a href="{{ .RelPermalink }}">{{ .LinkTitle }}</a>
          
          {{ $index = sub $index 1 }}
      {{ end }}
     
  {{ end }}
  ```

## files update
Perform git add, commit, and push. Now remote repository has already updated as the local one.


## hugo server
+ In the cmd run Hugo.
+ Then open browser to access https://localhost:1313/bytes-and-grains.
+ Now it is served from local server by Hugo. Click the only post available.
+ Click Tags.
+ Back and click author name.

It shows author page, biodata, and articles written by the author.


## github workflow
Visit the repository https://github.com/dudung/bytes-and-grains.
- Click Action tab under the address bar.
- Type hugo on the search field.
- Choose Hugo and click Configure.
- Click Commit changes…, the green button on the top right.
- Unless you want to change Commit message or add Extended description, simply confirm and click Commit changes.
- Notice the process in deploying GitHub pages.
- Unfortunately, it fails as show with red times symbol. Click it to study the problem.
- It seems that the repository does not have Page enabled. Back to main page of the repository and click Settings tab.
- Choose Pages on the left menu.
- On Branch, click it and select main.
- Click Save.
- Go to main page again.
- It is now successful.
- But it is not the pages created by Hugo. Try to push something.
- Visit again the main page of the repository.
- It seems successful. Then visit ~~https://dudung.github.io/bytes-and-grains/~~ https://dudung.github.io/bug/.

It shows the result as the local server rendered previously.


## closing
After read this story you are able to
- create a GitHub repository,
- clone it to a local folder,
- modify the local folder and its content according to other repository,
- change setting on hugo.toml and layouts/index.html as necessary,
- update local repository and push the change to remote repository,
- run Hugo server locally,
- create GitHub workflow for Package a Hugo site,
- enable GitHub Pages,
- observe GitHub Actions steps while do the deployment,
- view deployment result.


## update
`16-jul-2024` In order to get catchy acronym 'bug', it would be renamed from 'Bytes and Grains' to 'Bytes und Grains', which aligns well with interests in programming and technology, is memorable and intriguing, and also subtly reflects multilingual background [^gpt4o_2024a]. The execution might not be immediately, but soon hopefully.

The repo is renamed today and GitHub Pages &rightarrow; Build and deployment &rightarrow; Source becomes Deploy from a branch. After change it to GitHub Actions, it works again.


## further readings
- Christopher Hart, “How to Create a Simple, Free Blog with Hugo and GitHub Pages”, 28 May 2022, url https://chrisjhart.com/Creating-A-Simple-Free-Blog-Hugo/ [20240706].
- Sarah Helmbrecht, “How to Build a Hugo Blog on GitHub Pages”, 1 Nov 2023, url https://sarahhelmbrecht.com/blog/websitetutorial/ [20240706].
- Jaehyeon Kim, “Self-Managed Blog With Hugo and GitHub Pages”, 24 Apr 2023, url https://jaehyeon.me/blog/2023-04-24-self-hosted-blog/ [20240706].
- Magsther, “How to Create and Host a Website with Hugo and GitHub Pages”, Medium, 18 Jun 2023, url https://medium.com/p/86ae6bcbadd [20240706].
- Rich Youngkin, “Create a Free Blog Site Using GitHub Pages and Hugo”, Raspberry Pi Programming, 31 Aug 2020, url https://youngkin.github.io/post/createafreeblogsite/ [20240706].
- Roman Kudryashov, “Getting Started with a Hugo Blog & GitHub Pages”, Shared Physics, 15 Feb 2020, url https://sharedphysics.com/setting-up-a-hugo-static-site-on-github/ [20240706].


## notes
[^gpt4o_2024]: GPT-4o, Sparisoma Viridi, "Dynamic Bytes and Grains", ChatGPT, 6 Jul 2024, url https://chatgpt.com/share/15628c86-a31d-497c-a23e-0d3afb5443a2 [20240707].
[^Viridi_2023a]: Sparisoma Viridi, "How to create a GitHub Account", Medium, 8 Jul 2023, url https://medium.com/p/46c4a36c2673 [20240707].
[^Viridi_2023b]: Sparisoma Viridi, "Create a GitHub repository and collaborate", Medium, 16 Jul 2023, url https://medium.com/p/12c1dc10d7d [20240707].
[^Viridi_2023c]: Sparisoma Viridi, "Installing Git", Medium, 18 Sep 2023, url https://medium.com/p/8d4c29799185 [20240707].
[^Viridi_2023d]: Sparisoma Viridi, "Installing Hugo", Medium, 18 Sep 2023, url https://medium.com/p/3c8a9cbb791d [20240707].
[^gpt4o_2024a]: GPT-4o, Sparisoma Viridi, "Acronym Änderung für Blog", ChatGPT, 16 Jul 2024, url https://chatgpt.com/share/9dc97635-51d4-4551-9d87-82202f1f405d [20240716].
