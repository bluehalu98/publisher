$(function(){
  $(window).load(function(){
		var $container = $('.page3-4 ul');
		var filterSelect ="*"
		fn_isotope()
		function fn_isotope(){
			$container.isotope({
				filter: filterSelect,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}//animationOptions
			})//isotope
		}//fn
		$('.btns button').click(function(){
      $('.btns button').removeClass('active')
      $(this).addClass('active')
			filterSelect = $(this).attr("data-category")
			fn_isotope()
		})//click	
		$(window).resize(function(){
			fn_isotope()
		})//resize
	})//load
})