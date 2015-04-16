

//<![CDATA[
$(function(){
	$("#mainArea").vgrid({
		easeing: "easeOutQuint",
		time: 800,
		delay: 20
	});
});
//]]>

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
	initRollOverImages(".thumbImg > a > img");

});

