$(document).ready(function () {
    $('.burger-button').click(function(event) {
        $('.burger-button, .header-menu, .header, .burger-button-line').toggleClass('active');
        $('body').toggleClass('lock');
        $('.main').toggleClass('overlay');
    });
});