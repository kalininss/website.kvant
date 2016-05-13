$(function() {

   $('input[name="phone"]').mask("+7 (999) 999-9999");

	//Плавная прокрутка до якоря
	$("a[href^='#']").click(function () {
		elementClick = $(this).attr("href")
		destination = $(elementClick).offset().top - 40;
		$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
		return false;
	});

	//slider_testimonials
	var options = {
		$SlideDuration: 600,
		$SlideEasing: $Jease$.$Linear,
		$SlideWidth: 160,
		$Cols: 4,
		$ArrowNavigatorOptions: {
		  $Class: $JssorArrowNavigator$
		}
	};
	var slider_portfolio = new $JssorSlider$("slider_portfolio", options);
	var options = {
		$SlideDuration: 600,
		$SlideEasing: $Jease$.$Linear,
		$SlideWidth: 213,
		$Cols: 3,
		$ArrowNavigatorOptions: {
		  $Class: $JssorArrowNavigator$
		}
	};
	var slider_company = new $JssorSlider$("slider_company", options);


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			yaCounter37304795.reachGoal('mainTarget');
			alert("Спасибо за заявку! Мы свяжемся с Вами в ближайшее время.");
			setTimeout(function() {				
				$("form").trigger("reset");
			}, 1000);
		});
		return false;
	});

});
