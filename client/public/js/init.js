jQuery(document).ready(function($){
/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

$('.Resume header').css({ 'height': $(window).height() });
$(window).on('resize', function() {

     $('.Resume header').css({ 'height': $(window).height() });
     $('body').css({ 'width': $(window).width() })
});
})