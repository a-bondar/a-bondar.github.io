(function () {
	var links = document.querySelectorAll(".js-nav-link");

	for (i = 0; i < links.length; i++) {
		links[i].addEventListener("click", function (e) {
			var target = e.currentTarget;
			document.querySelector(".navigation__link--active").classList.remove("navigation__link--active");
			target.classList.add("navigation__link--active");
		})
	};

})();
