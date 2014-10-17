$(document).ready(function () {
    var dialog = document.querySelector('#more');
    dialogPolyfill.registerDialog(dialog);
    
    $('.menu-trigger').click(function (e) {
        $(e.currentTarget).toggleClass('open');
    }); 
    
    $('[data-triggers="dialog"]').click( function (e) {
    	dialog.showModal();
    });
    
    $('dialog .close').click( function (e) {
    	dialog.close();
    }); 
    
});