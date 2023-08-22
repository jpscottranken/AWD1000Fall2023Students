"use strict";
$(document).ready( () => {

	// preload images
	$("#image_list a").each( (index, img) => {
		const swappedImage = new Image();
		swappedImage.src = $(img).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").hover(
		evt => {
			// animate thumbnail
			const thumb = evt.currentTarget;
			$(thumb).stop(true).animate({ top: 15 }, "fast");
			// $(thumb).stop(true, true).animate({ top: 15 }, "fast");
			// $(thumb).finish().animate({ top: 15 }, "fast");						

			// swap image
			const imageURL = $(thumb).attr("href");
			$("#image").attr("src", imageURL);
			
			//swap caption
			const caption = $(thumb).attr("title");
			$("#caption").text(caption);					
		},
		evt => {
			// animate thumbnail
			const thumb = evt.currentTarget;
			$(thumb).stop(true).animate({ top: 0 }, "fast");
			//$(thumb).stop(true, true).animate({ top: 0 }, "fast");
			//$(thumb).finish().animate({ top: 0 }, "fast");
		}
	);

	// cancel the default action of the link
	$("#image_list a").click( evt => evt.preventDefault() );
	
	// move focus to first thumbnail
	$("image_list:first-child:first-child").focus();
	
});