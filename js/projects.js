$().ready(
	$(document).scroll( function () {
		var scrolled = $(window).scrollTop();
		var surrealEstateHeight = document.getElementById('surreal-estate').clientHeight;
		var padmentumHeight = document.getElementById('padmentum').clientHeight;
		var pilamHeight = document.getElementById('pilam-tv').clientHeight;
		var oldWebHeight = document.getElementById('old-website').clientHeight;
		if (scrolled < surrealEstateHeight) {
			$(".project-link").removeClass('current');
			$("#se").addClass('current');
		}
		else if (scrolled < surrealEstateHeight + padmentumHeight) {
			$(".project-link").removeClass('current');
			$("#p").addClass('current');
		}
		else if (scrolled < surrealEstateHeight + padmentumHeight + pilamHeight) {
			$(".project-link").removeClass('current');
			$("#tv").addClass('current');
		}
		else {
			$(".project-link").removeClass('current');
			$("#old").addClass('current');
		}
	})
)