
$('a.smoothScroll').smoothScroll({
    offset: -80,
    scrollTarget: $(this).val()
});

$('.post_article').waypoint(
    function (direction) {
        if (direction === 'down') {
            var wayID = $(this).attr('id');
        } else {
            var previous = $(this).prev();
            var wayID = $(previous).attr('id');
        }
        $('.current').removeClass('current');
        $('#main_nav a[href=#' + wayID + ']').addClass('current');
    }, { offset: '40%' });

var stickyNavTop = $('.nav').offset().top;

var stickyNav = function () {
   
};
stickyNav();
$(window).scroll(function () {
    stickyNav();
});