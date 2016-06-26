$(function() {

	(function preview() {

		$('.contentHover > i').on('click', function () {
			var $index = $('.contentHover > i').index(this),
			$contentImgAttr = $('.contentImg').eq($index).attr('data'),
			$contentLinkAttr = $('.contentHoverLink').eq($index).attr('data'),
			$contentHoverAttrHref = $('.contentHoverLink').eq($index).attr('href');

			(function showImg() {
				$('.show').css({
					'display': 'block'
				}).animate({
					'opacity': '1'
				}, 500)
				$('.show').append('<span class="fa fa-times fa-2x" aria-hidden="true"></span>');
				$('.show').append('<a href="'+$contentLinkAttr+'" target="_blank" title="Просмотреть страницу" class="previewFullPage">');
				$('.show').append('<a href="'+$contentHoverAttrHref+'" target="_blank" title="Перейти в папку с проектом" class="previewPageFolder">');
				$('.previewFullPage').append('<i class="fa fa-desktop" aria-hidden="true"></i>');
				$('.previewPageFolder').append('<i class="fa fa-code" aria-hidden="true"></i>');
				$('.show').append('<div class="showFullImgBox">');
				$('.showFullImgBox').append('<img class="showFullImg">');
				$('.showFullImg').attr('src', $contentImgAttr);

				$('.show span').on('click', function () {
					$('.show').css({
						'display': 'none',
						'opacity': '0'
					})
					$('.showFullImgBox, .show span, .previewFullPage, .previewPageFolder').remove();
				})
			})();
		})
	})();
	// 




	(function showHideContact() {
		$('#contact').on('click', function (e) {
			$('.contact').css({
				'display': 'block'
			}).animate({
				'opacity': '1'
			}, 500)
			e.preventDefault();
			$('.contactClose > i').on('click', function () {
				$('.contact').animate({
					'opacity': '0'
				}, 500);
				function contactHide() {
					$('.contact').css({
						'display': 'none'
					});
				}
				setTimeout(contactHide, 500);
			})
		})
	})();
	// 

	(function showHideСertificate() {
		$('#certificate').on('click', function (e) {
			$('.certificate').css({
				'display': 'block'
			}).animate({
				'opacity': '1'
			}, 500)
			e.preventDefault();
			$('.certificateClose > i').on('click', function () {
				$('.certificate').animate({
					'opacity': '0'
				}, 500);
				function contactHide() {
					$('.certificate').css({
						'display': 'none'
					});
				}
				setTimeout(contactHide, 500);
			})
		})
	})();
});