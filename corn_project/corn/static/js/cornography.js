
	/*hiding cornography image until clicked*/
	/*hide image*/
	$('.image').hide();
	/*create button*/
	$('.censor').append('<button></button>');
	/* when button clicked */
	$('button').click(function () {
		/* show image */
		$(this).prev().show();
		/* remove button */
		$(this).hide();
	});

	$('.image').click(function () {
		/*create button*/
		$(this).parent().append('<button></button>');
		$(this).hide();
	});

	/*hiding Shy Corn cornography image until clicked*/
	/*hide image*/
	$('#image-long').hide();
	/*create button*/
	$('#censor-long').append('<button id = "button-long"></button>');
	/* when button clicked */
	$('button').click(function () {
		/* show image */
		$(this).prev().show();
		/* remove button */
		$(this).remove();
	});

		$('#image-long').click(function () {
		/*create button*/
		$(this).parent().append('<button id ="button-long"></button>');
		$(this).hide();
	});


