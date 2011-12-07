hs.graphicsDir = '/assets/js/highslide/graphics/';
hs.showCredits = false;
hs.outlineType = 'rounded-white';
hs.wrapperClassName = 'draggable-header';
// always use this with flash, else the movie will be stopped on close:
hs.preserveContent = false;
hs.wrapperClassName = 'draggable-header no-footer';

// create a shorthand function so we don't need to put all this in the opener's onclick
function openYouTube(opener) {
	var returnValue;
	
	// Safari Mobile doesn't have Flash, so we just let the device use the built-in 
	// YouTube viewer.		
	if (/(iPhone|iPod|iPad)/.test(navigator.userAgent)) {
		opener.href = opener.href.replace('/v/', '/watch?v=');
		returnValue = true;		
	}

	else returnValue = hs.htmlExpand(opener, { 
		objectType: 'swf', 
		objectWidth: 480, 
		objectHeight: 385, 
		width: 480, 
		swfOptions: { 
			params: { 
				allowfullscreen: 'true' 
			}
		}, 
		maincontentText: 'You need to upgrade your Flash player' 
	});
	
	return returnValue;
}  
