# Building the site

* add Recent work to index.html
* modify posts as recent conferences
* add links to About
* add at least description to i^2
* check CNAME configuration (up to June 1)

>To confirm that your DNS record configured correctly, use the dig command, replacing WWW.EXAMPLE.COM with your subdomain.

'$ dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd
  > ;WWW.EXAMPLE.COM.                     IN      A
  > WWW.EXAMPLE.COM.              3592    IN      CNAME   YOUR-USERNAME.github.io.
  > YOUR-USERNAME.github.io.      43192   IN      CNAME    GITHUB-PAGES-SERVER .
  >  GITHUB-PAGES-SERVER .         22      IN      A       192.0.2.1
'

