$(document).foundation();

//Navigation show/hide
var scrolled;
var ScrollTop = 0;
var delta = 5;
var navHeight = $('header').outerHeight();
$(window).scroll(function(event) {
    scrolled = !0
});
setInterval(function() {
    if (scrolled) {
        hasScrolled();
        scrolled = !1
    }
}, 250);
function hasScrolled() {
    var st = $(this).scrollTop();//ST = curent position of scroll   NAV DOWN IS DARK
    if (Math.abs(ScrollTop - st) <= delta)//if 0 - curent location is less than or =to 5 return
        return;
    if (st > ScrollTop && st > navHeight) {//if current scroll is larger than 0 and it is greater than nav height remove the class nav down and add nav up
        $('header').removeClass('nav-down').addClass('nav-up');
    } else if (st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');        
        if (st == 0) {
            $('header').removeClass('nav-down');
        }
    } 
        
    ScrollTop = st;
    // console.log(st)
}
//End Navigation show/hide

//Mobile Nav Script
//Targets mobile nav toggle
$( ".burger" ).click(function() {
  $( this ).toggleClass("open").toggleClass("close");
  $(".navigation-column:last-child .row").toggleClass("open");
  $('header').toggleClass("lock");
  console.log("nav-opened");
});
//Sub nav for mobile
$(".has-sub").click(function() {
    $(this).find(".mobile-sub-nav").addClass("sub-open").removeClass("sub-close");
    console.log("sub-opened");
});
$(".mobile-nav-back").click(function(e) {
    e.stopPropagation();
    $(this).parent(".mobile-sub-nav.sub-open").removeClass("sub-open").addClass("sub-close");
    console.log("sub-closed");
});
//End Mobile Nav Script