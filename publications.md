---
layout: default
title: Publications
permalink: /publications/
usebibtex: true
---

# {{ page.title }}

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
          <span class="if title"><span class="title"></span></span>
      </div>
      <div class="pubauthors">
          <span class="author" conjunction=" and"></span>
          <span class="if journal"><em><span class="journal"></span></em>,</span>
          <span class="if booktitle">In <em><span class="booktitle"></span></em>,</span>
          <span class="if series">In <em><span class="series"></span></em>,</span>
          <span class="if volume">volume <span class="volume"></span>,</span>
          <span class="if number">number <span class="number"></span>,</span>
          <span class="if pages"><span class="pages"></span></span>
          <span class="if address"><span class="address"></span>:</span>
          <span class="if publisher"><span class="publisher"></span></span>
          <!--<span class="if address"><span class="address"></span>,</span>-->
          <!--<span class="if month"><span class="month"></span>,</span>-->
          <!--<span class="if year"><span class="year"></span>.</span>-->
         <span class="if note">
            <a class="bibtexVar" href="{{ '/' | relative_url }}assets/docs/+NOTE+" extra="note" target='_blank' rel="noopener noreferrer">
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
