// $("a[href='#top']").click(function() {
//     $('body, html').animate({ scrollTop: 0 }, 2000);
//     return false;
// });

$(document).ready(function) {


    $('a[href=#top]').click(function () {
        $("html, body").animate({scrollTop: 0}, 'slow');
        return false;
    });

});
