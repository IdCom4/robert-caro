


$(document).ready(function() {
	$("#p-1").css("opacity", "0");
	$("#p-2").css("opacity", "0");
	$("#p-3").css("opacity", "0");



	var stars = $("#stars").offset();
	var sky = $("#sky").offset();
	var forest = $("#forest").offset();
	var ground = $("#ground").offset();

	var yOffset;

	var svgTop;

	var swi = 0;
	var n = 0;

	$(window).scroll(function () {
		var posScroll = $(window).scrollTop();
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
		yOffset = $(window).scrollTop() / 5;
	    $("#stars").css('background-position', '0px '+-yOffset+'px');
	    yOffset = $(window).scrollTop() / 10;
	    $("#sky").css('background-position', '0px '+-yOffset+'px');

	    svgTop = $("#sky").offset();
	    svgTop.top -= 250;
	    yOffset = $(window).scrollTop();
	    if(yOffset > svgTop.top)
		{
			$("#cable").css("stroke-dashoffset", "0");
			console.log("coucou");
		}
		
		
		if(yOffset + 400 > $("#p-1").offset().top)
		{
			$("#p-1").css("transition", "2s");
			$("#p-1").css("opacity", "1");

		}
		if(yOffset + 400 > $("#p-2").offset().top)
		{
			$("#p-2").css("transition", "2s");
			$("#p-2").css("opacity", "1");
		}
		if(yOffset + 400 > $("#p-3").offset().top)
		{
			$("#p-3").css("transition", "2s");
			$("#p-3").css("opacity", "1");
		}
		if(yOffset + 400 > $("#cross").offset().top)
		{
			$("#cross").css("top", "65vh");
			$("#cross").css("box-shadow", "0 10px 10px black");
		}
		else
		{
			$("#cross").css("top", "70vh");
			$("#cross").css("box-shadow", "none");
		}

		if(yOffset > swi)
		{
			n += 3;
			if(n > 360)
			{
				n = 0;
			}
			$("header a i").css("transform", "rotate("+n+"deg)");
		}
		else {
			n -= 3;
			if(n < 0)
			{
				n = 360;
			}
			$("header a i").css("transform", "rotate("+n+"deg)");
		}
		swi = yOffset;
		
	}); 
	$("#cross button").click(function () {
		$("header").fadeOut(400);
		$("footer").removeClass("d-none");

	});
	$("#modal button").click(function () {
		$("header").fadeIn(400);
		$("footer").addClass("d-none");
	});

	$('.js-scrollTo').on('click', function() {
		var page = $(this).attr('href');
		var speed = 750;
		$('html, body').animate( { scrollTop: $(page).offset().top - 90}, speed );
		return false;
	});
});