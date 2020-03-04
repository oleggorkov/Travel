$(document).ready(function () {
    $('.main-bid-button').click(function(event) {
        $('.main-bid-personal__label').toggleClass('invalid');
        $('#name').toggleClass('invalid-name');
        $('.main-form-block-flex__error').toggleClass('add-error');
    });
});