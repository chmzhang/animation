$(function(){
	$('.special .detail').first().show();
	$('.biaoti').mouseover(function() {
		$(this).hide();
		$(this).parent().css({
			height: '400px',
			overflow: 'show'
		});
		$(this).next().show();
		$(this).parent().siblings('.zhuanti').css({
			height: '100px',
			overflow: 'hidden'
		});
		$(this).parent().siblings('.zhuanti').children('.text').show();
		$(this).parent().siblings('.zhuanti').children('.biaoti').show();		
	});
	$('.special a').mouseover(function() {
		$(this).parent().siblings('.detail').hide();
		$(this).parent().next().show();

	});
});