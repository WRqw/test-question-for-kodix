$(document).ready(function() {

	$(".head-mnu li").click(function() {
		 $('.hide-mnu').slideToggle("slow");
	});


	$(".toggle-menu").click(function() {
		 $('.head-mnu').slideToggle("slow");
	});

	$(".top-clothes-button-wrap .clothes-button").click(function() {
		 $('.top-clothes-button-wrap .clothes-descr').slideToggle("fast");
	});

	$(".bottom-clothes-button-wrap .clothes-button").click(function() {
		 $('.bottom-clothes-button-wrap .clothes-descr').slideToggle("fast");
	});

	 $(".carousel").owlCarousel({
	 	responsive : {
	 		0 : {
	 			items : 1,
	 			nav : true
	 		}
	 	},
	 	navText : ''

	 });







	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});