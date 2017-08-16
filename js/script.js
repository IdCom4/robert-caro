$(document).ready(function() {

	var stars = $("#stars").offset();
	var sky = $("#sky").offset();
	var forest = $("#forest").offset();
	var ground = $("#ground").offset();
	// $("#a-stars").text(stars.top);
	// $("#a-sky").text(sky.top);
	// $("#a-forest").text(forest.top);
	// $("#a-ground").text(ground.top);
	// console.log("stars.top = " + stars.top);
	// console.log("sky.top = " + sky.top);
	// console.log("forest.top = " + forest.top);
	// console.log("ground.top = " + ground.top);
	$(window).scroll(function () {
		var posScroll = $(window).scrollTop();
		//$("#a-stars").text(posScroll + " / " + stars.top);
		if(stars.top > posScroll)
		{
			$("#a-stars").removeClass("active");
			$("#a-sky").removeClass("active");
			$("#a-forest").removeClass("active");
			$("#a-ground").removeClass("active");
		}
		if(stars.top < posScroll + 91)
		{
			$("#a-stars").addClass("active");
			$("#a-sky").removeClass("active");
			$("#a-forest").removeClass("active");
			$("#a-ground").removeClass("active");
		}
		if(sky.top < posScroll + 91)
		{
			$("#a-stars").removeClass("active");
			$("#a-sky").addClass("active");
			$("#a-forest").removeClass("active");
			$("#a-ground").removeClass("active");
		}
		if(forest.top < posScroll + 91)
		{
			$("#a-stars").removeClass("active");
			$("#a-sky").removeClass("active");
			$("#a-forest").addClass("active");
			$("#a-ground").removeClass("active");
		}
		if(ground.top < posScroll + 91)
		{
			$("#a-stars").removeClass("active");
			$("#a-sky").removeClass("active");
			$("#a-forest").removeClass("active");
			$("#a-ground").addClass("active");
		}
	});


	$('.js-scrollTo').on('click', function() {
		var page = $(this).attr('href');
		var speed = 750;
		$('html, body').animate( { scrollTop: $(page).offset().top - 90}, speed );
		return false;
	});
});