$(document).ready(function () {
    $('.toggle-1').click(function (e) {
        $('.dropdown-modal-1').stop(true).slideToggle(200);
    });
    $(document).click(function (e) {
        if (!$(e.target).closest('.toggle-1, .dropdown-modal-1').length) {
            $('.dropdown-modal-1').stop(true).slideUp(200);
        }
    });
    $('.toggle-2').click(function (e) {
        $('.dropdown-modal-2').stop(true).slideToggle(200);
    });
    $(document).click(function (e) {
        if (!$(e.target).closest('.toggle-2, .dropdown-modal-2').length) {
            $('.dropdown-modal-2').stop(true).slideUp(200);
        }
    });
    $(document).click(function (e) {
        $('#cancleButton').click(function (e) {
            $('.dropdown-modal-1').hide(300);
        });
    });
    $(document).click(function (e) {
        $('#removeButton').click(function (e) {
            $('#fileProgress').hide(300);
        });
    });
    $(document).click(function (e) {
        $('#closeModal').click(function (e) {
            $('#topModal').hide(300);
        });
    });
});

/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

'use strict';

;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));