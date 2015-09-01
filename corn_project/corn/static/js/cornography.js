/*hiding cornography image until clicked*/
/*hide image*/
$('.image').hide();
/*create button*/
$('.censor').append('<button></button>');
/* when button clicked */
$('button').click(function(){
/* show image */
	$(this).prev().show();
/* remove button */
	$(this).remove();
	});

/*hiding Shy Corn cornography image until clicked*/
/*hide image*/
$('#image-long').hide();
/*create button*/
$('#censor-long').append('<button id = "button-long"></button>');
/* when button clicked */
$('button').click(function(){
/* show image */
	$(this).prev().show();
/* remove button */
	$(this).remove();
	});
