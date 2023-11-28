# How-To build Julie-blob with Jekyll and BibTex-js		
from the scratch

## Setting up a GitHub Pages with Jekyll

[instructions on GitHub](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)

### Create a repository (julie-blob)

* In the upper-right corner of any page, select , then click New repository.
* Repository Name: julie-blob

### On local computer

* git init julie-blob
* cd julie-blob
* echo "# julie-blob" >> README.md
* git init
  >Initialized empty Git repository in ~/julie-blob/.git/
* vi Gemfile
  >gem "github-pages", "~> 228", group: :jekyll_plugins
  >
  >jekyll new --skip-bundle
* bundle install
* git add .
* git commit -m 'Initial GitHub pages site with Jekyll'
* git push -u origin main

## Install Jekyll

[Install ASDF]( https://asdf-vm.com/guide/getting-started.html )	

* git clone https://github.com/excid3/asdf.git ~/.asdf		
* echo '. "$HOME/.asdf/asdf.sh"' >> ~/.zshrc		
* echo '. "$HOME/.asdf/completions/asdf.bash"' >> ~/.zshrc		
* echo 'legacy_version_file = yes' >> ~/.asdfrc
* exec $SHELL
* . .zshrc
### recreate folder  
* rm -rf julie-blob
* Download ZIP form GitHub and uncompress		
* cd julie-blob-main		
* git init
* Configure SSH	
* git remote add origin git@gh_julie:julie-goncharov/julie-blob.git		
* git remote -v		
	>origin git@gh_julie:julie-goncharov/julie-blob.git (fetch)
 	>	
	>origin git@gh_julie:julie-goncharov/julie-blob.git (push)	
* rm -rf *		
* rm .DS_Store .gitignore		
* git pull origin main		
* git branch		
	>* main	
### install Ruby		
* asdf plugin add ruby		
* asdf install ruby 3.1.4		
* asdf global ruby 3.1.4		
* ruby -v		
	>ruby 3.1.4p223 (2023-03-30 revision 957bb7cb81) [x86_64-darwin21]
### install Jekyll and bundler
* gem install jekyll bundler		
* gem install bundler:2.4.22		
* bundler install
### Run server  
* bundler exec jekyll serve
   
http://127.0.0.1:4000/julie-blob/
  >press ctrl-c to stop.  

## Using BibTex-js (bibliography)

[Wiki for BibTex-js](https://github.com/pcooksey/bibtex-js/wiki)

* _includes/head.html
  
  ```<!-- Enabling https on a Jekyll site -->```
  
        {% if site.production == true %}
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        {% endif %}
 ``` <!-- for BibTex support -->```

          {% if page.usebibtex %}
          <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
          <script  type="text/javascript" src="{{ '/' | relative_url }}assets/js/bibtex_js.js"></script>

          <bibtex src="{{ "/" | relative_url }}assets/docs/mybibliography.bib"></bibtex>
          {% endif %}

* publications.md
```  ---
layout: default
title: Publications
permalink: /publications/
usebibtex: true
---
<h1 class="mt-4">Publications</h1>

<div class="bibtex_structure">
  <div class="sort year" extra="DESC number">
          <div class="templates"></div>
  </div>
</div>

<div id="bibtex_display"></div>

<div class="bibtex_template" style="display: none;">
    <div class="pubitem">
      <div class="pubtitle">
          <span class="if year"><span class="year"></span></span>
          ,
          <span class="if title"><span class="title"></span></span>
      </div>
      <div class="pubauthors">
          <span class="author"></span>
          ,
          <span class="if journal"><em><span class="journal"></span></em>,</span>
          <span class="if publisher"><em><span class="publisher"></span></em>,</span>
          <span class="if booktitle">In <em><span class="booktitle"></span></em>,</span>
          <span class="if address"><span class="address"></span>,</span>
          <span class="if month"><span class="month"></span>,</span>
          <span class="if year"><span class="year"></span>.</span>
         <span class="if note">
            <a class="bibtexVar" href="{{ "/" | relative_url }}assets/docs/+NOTE+" extra="note" target='_blank' rel="noopener noreferrer">
              [PDF]
            </a>
          </span>
          <span class="if url">
            <a class="bibtexVar" href="+URL+" extra="url" target='_blank' rel="noopener noreferrer">
              [WEB]
            </a>
          </span>
          <span class="if doi">
              <a class="bibtexVar" href="http://dx.doi.org/+DOI+" extra="doi" target='_blank' rel="noopener noreferrer">
                [DOI]
              </a>
          </span>
    </div>
    <div class="publinks">
          <details><summary style="cursor: pointer;"><a aria-controls="bib+BIBTEXKEY+"  extra="BIBTEXKEY" bibtexjs-css-escape>[BibTex]</a></summary>
               <div class="bibtexVar" id="bib+BIBTEXKEY+" extra="BIBTEXKEY">
                       <pre><span class="bibtexraw noread"></span></pre>
               </div>
           </details>
   </div>	
  </div>
</div>
```
### Using NOTE field for PDF file

*  mybibliography.bib
  
  	**note = {Goncharov_2020oblige_FDSL.pdf},**

```
  @incollection{gon20a,	
	address = {Berlin},
	author = {Goncharov, Julie},
	booktitle = {Advances in formal {S}lavic linguistics 2017},
	editor = {Franc Maru{\v s} and Petra Mi{\v s}ma{\v s} and Rok {\v Z}aucer},
	pages = {51--73},
	publisher = {Language {S}cience {P}ress},
	title = {Whom to oblige?},
	note = {Goncharov_2020oblige_FDSL.pdf},
 	year = {2020}}
```
