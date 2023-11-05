$(() => {


	const productionSliders = [],
		production = document.querySelectorAll('.production .swiper')

	production.forEach(function (el, i) {
		el.classList.add('production_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1.12
				},
				768: {
					spaceBetween: 0,
					slidesPerView: 1
				}
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		}

		productionSliders.push(new Swiper('.production_s' + i, options))
	})




	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews .swiper')

	reviews.forEach(function (el, i) {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1.12
				},
				768: {
					spaceBetween: 0,
					slidesPerView: 1
				}
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})



	const modalSliders = [],
		modal = document.querySelectorAll('.modal .swiper')

	modal.forEach(function (el, i) {
		el.classList.add('modal_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 0,
					slidesPerView: 1
				}
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		}

		modalSliders.push(new Swiper('.modal_s' + i, options))
	})


	const modal2Sliders = [],
		modal2 = document.querySelectorAll('.modal_example .swiper')

	modal2.forEach(function (el, i) {
		el.classList.add('modal2_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 0,
					slidesPerView: 1
				}
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		}

		modal2Sliders.push(new Swiper('.modal2_s' + i, options))
	})


	// if ($('.modal_example .swiper').length) {
	// 	new Swiper('.modal_example .swiper', {
	// 		loop: true,
	// 		speed: 750,
	// 		watchSlidesVisibility: true,
	// 		slideActiveClass: 'active',
	// 		slideVisibleClass: 'visible',
	// 		spaceBetween: 0,
	// 		slidesPerView: 1,
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			type: 'bullets',
	// 			clickable: true,
	// 		  },
	// 		  breakpoints: {
	// 			0: {
	// 				spaceBetween: 30,
	// 				slidesPerView: 1
	// 			},
	// 			1024: {
	// 				spaceBetween: 62,
	// 				slidesPerView: 1.2
	// 			}
	// 		},
	// 		navigation: {
	// 			nextEl: '.swiper-button-next',
	// 			prevEl: '.swiper-button-prev'
	// 		}
	// 	})
	// }



	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs button', function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				$activeTabContent = $(activeTab),
				level = $(this).data('level')

			$parent.find('.tabs:first button').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		const $activeTab = $('.tabs button[data-content=' + locationHash + ']'),
			$activeTabContent = $(locationHash),
			$parent = $activeTab.closest('.tabs_container'),
			level = $activeTab.data('level')

		$parent.find('.tabs:first button').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeTab.addClass('active')
		$activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}




	// Показать контент 
	$(".link-more").click(function (e) {
		e.preventDefault();
		$(".construction_item").removeClass("hide");
		$(".link-more").addClass("active");
	});


	// Выбор файла
	$('body').on('change', 'form input[type=file]', function () {
		let label = $(this).closest('.file').find('label')

		label.addClass('active')
		label.find('span').text($(this).val())
	})





	// Ширина окна для ресайза
	WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
	BODY = document.getElementsByTagName('body')[0]
	OVERLAY = document.querySelector('.overlay')




	$('body').on('click', '.modal_link', function (e) {
		e.preventDefault()

		Fancybox.close(true)
		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline',
		}]);
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<img src=images/close2.svg>',
		// spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		// main: null
	}


	$('input[type=tel]').inputmask('+7 (999) 999-99-99')




	window.addEventListener('resize', function () {
		WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

		let windowW = window.outerWidth

		if (typeof WW !== 'undefined' && WW != windowW) {


			// Перезапись ширины окна
			WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


			// Моб. версия
			if (!fakeResize) {
				fakeResize = true
				fakeResize2 = false

				document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
			}

			if (!fakeResize2) {
				fakeResize2 = true

				if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
			} else {
				fakeResize = false
				fakeResize2 = true
			}
		}
	})



})



function handleFiles(file) {
	const fileList = file;
	$(".upload-file__text").text(fileList[0]["name"]);
}