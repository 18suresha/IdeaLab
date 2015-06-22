// smooth scroll
$(function() {
  $('a[href*=#]:not([href=#content-carousel])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// functions for content page text-appear links
function link1Function() {
                document.getElementById('link1-txt').style.display='block';
                document.getElementById('link2-txt').style.display='none';
                document.getElementById('link3-txt').style.display='none';
                document.getElementById('intro-txt').style.display='none';
};
function link2Function() {
                document.getElementById('link2-txt').style.display='block';
                document.getElementById('link1-txt').style.display='none';
                document.getElementById('link3-txt').style.display='none';
                document.getElementById('intro-txt').style.display='none';
};
function link3Function() {
                document.getElementById('link3-txt').style.display='block';
                document.getElementById('link2-txt').style.display='none';
                document.getElementById('link1-txt').style.display='none';
                document.getElementById('intro-txt').style.display='none';
                
};

// function for intro more/less
function introMoreFunction() {
                document.getElementById('intro-txt-hide').style.display='block';
                document.getElementById('intro-txt-more').style.display='none';
                document.getElementById('intro-txt-less').style.display='block';
};
function introLessFunction() {
                document.getElementById('intro-txt-hide').style.display='none';
                document.getElementById('intro-txt-more').style.display='block';
                document.getElementById('intro-txt-less').style.display='none';
}