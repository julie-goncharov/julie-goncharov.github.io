/* https://www.w3web.net/how-to-add-header-and-footer-in-javascript/ */

function header () {
  with(document) {
       write("<div id='headerMain'>");
            write("<a class='logo' href='./index.html'>");
              write("<span class='nav-title'>Julie Goncharov</span>");
            write("</a>");
           write("<div class='menuMain'>");
               write("<ul class='menu'>");
                    write("<li><a href='index.html'>Home</a>");
                    write("</li>")
                    write("<li><a href='publications.html'>Publications</a>");
                    write("</li>")
                    write("<li><a href='projects.html'>Projects</a>");
                    write("</li>")
                    write("<li><a href='contact.html'>Contact</a>");
                    write("</li>")
 //                   write("<li><a href='mailto:julie.goncharov@uni-goettingen.de'>Contact us</a>");
 //                   write("</li>")
               write("</ul>");
           write("</div>");
        write("</div>");
/*      write("<div id='project-header'>");
            write("<image class='project-header-image' src='./assets/images/AIAI_prog.png'/>");
                write("<div class='main-title'>Agency and Intentions in AI</div>");
                  write("<div>");
                      write("<blockquote><p>How do you connect with a single piece of information?</p><p>Date ‘em</p>");
                          write("<footer><cite>Kyle Thompson</cite></footer>");
                      write("</blockquote>");
                write("</div>");
            write("</div>");
      write("</div>"); */
  }
  /* imgsearch(); */
}

function footerContainer(){
      with(document){
        write("<div id='footerMain'>");
            write("<div style='display: inline-block; width:100%;'>");
                write("<div style='float: left; font-family: Georgia;'>");
                    write("<span>");
                        write(" QUICK LINKS");
                    write("</span>");
                    write("<br><a href='projects.html'>");
                        write("Projects");
                    write("</a>");
                    write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                    write("<a href='contact.html'>");
                        write("Contact");
                    write("</a>");
                write("</div>");
                write("<div style='float: right; font-family: Georgia; font-size: 12px;'>");
                    write("<div style='display: flex;'>");
                        write("<a class='icon-link' href='mailto:julie.goncharov@uni-goettingen.de'>");
                            write("<img src='./assets/icons/mail.svg' class='footer-icon'>");
                        write("</a>");
                    write("</div>");
                    write("<div style=' clear; both;'>");
                        write("&copy; 2023 Julie Goncharov. ALL RIGHTS RESERVED.");
                    write("</div>");
                write("</div>");
          write("</div>");

/*            write("<div>");
                    write("<a target='_blank' href='https://ail-workshop.github.io/'>");
                        write("<img src='./assets/images/ail_logo.png' style='width:120px'>");
                    write("</a>");
            write("</div>");
            write("<div class='project-card-text-container'>");
                    write("<a class='button' target='_blank' href='https://ail-workshop.github.io/'>");
                        write("Agency and Intentions in Language");
                    write("</a>");
            write("</div>");
          write("<div>");
                  write("<a target='_blank' href='https://uni-goettingen.de/de/vorschau_3dd0fb16351b3f7ffbd9a226d14b3a9b/652812.html'>");
                      write("<img src='./assets/images/ASG_logo.png' style='width:120px'>");
                  write("</a>");
          write("</div>");
          write("<div class='project-card-text-container'>");
                  write("<a class='button' target='_blank' href='https://uni-goettingen.de/de/vorschau_3dd0fb16351b3f7ffbd9a226d14b3a9b/652812.html'>");
                      write("Action Sensitivity in Grammar");
                  write("</a>");
          write("</div>");
          write("<div>");
                  write("<a target='_blank' href='https://ail-workshop.github.io/'>");
                      write("<img src='./assets/images/AIAI_prog.png' style='width:120px'>");
                  write("</a>");
          write("</div>");
          write("<div class='project-card-text-container'>");
                  write("<a class='button' target='_blank' href='https://ail-workshop.github.io/aiai-conference/'>");
                      write("Agency and Intentions in AI");
                  write("</a>");
          write("</div>");
*/
        write("</div>");
          }
  }
