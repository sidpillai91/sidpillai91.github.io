$(document).ready(function(){
    $('a[href^=#]').click(function(){
        var target;
        target = $( $(this).attr('href') );
        if (target.length == 0) {
            return;
        }
        $('html, body').animate({scrollTop: target.offset().top});
        return false;
    });
});


function initRollOverImages($button) {
	var image_cache = new Object();
	
 	$($button).each(function(i) {

		var imgsrc = this.src;

		var dot = this.src.lastIndexOf('.');
		
		var img_ov_or_not = imgsrc.match("\-ov");
		var img_active = imgsrc.match("\_active");
		
		if(img_ov_or_not == null && img_active == null ){
			var imgsrc_on = ovImg(imgsrc);
		}else{
			var imgsrc_on = imgsrc;
		}
		
		image_cache[this.src] = new Image();
		image_cache[this.src].src = imgsrc_on;
		
		$(this).hover(
			function() { this.src = imgsrc_on; },
			function() { this.src = imgsrc; });
		});
}

function ovImg(imgSrc){
	if(imgSrc){
		var dot = imgSrc.lastIndexOf('.');
		return imgsrc_on = imgSrc.substr(0, dot) + '-ov' + imgSrc.substr(dot, 4);
	}
}

$(function(){
	initRollOverImages(".loginBox >  p > a > img");
	initRollOverImages(".topBox01 >  p > a > img");
	initRollOverImages(".headBtn > a > img");
	initRollOverImages(".applibtn > a > img");
	initRollOverImages(".flowimg > p > a > img");

});


$(function() {
	var images = $("img");
	for(var i=0; i < images.size(); i++) {
		if(images.eq(i).attr("src").match("-btn.")) {
			$("img").eq(i).hover(function() {
				$(this).css('opacity', '0.8');
			}, function() {
				$(this).css('opacity', '1');
			});
		}
	}
});

//-----------------------------------------------------------------------
//	要素の最後を変更
//-----------------------------------------------------------------------

$(document).ready(function(){
    $(".footer .footerTop ul li:last").addClass("last");
});

//-----------------------------------------------------------------------
//	文字サイズ変更
//-----------------------------------------------------------------------
$(document).ready(function(){
  $('#fontSizer a').fontSizer({cookie:true});
});






