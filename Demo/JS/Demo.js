
var iframe = $("iframe");


iframe.attr("src", Cookies.get("path")); /* Taken from main site */

$(document).ready(function() {

	/* Elements */
	var name = $("#name");	
	var container = $(".container");
	var desktop = $("#desktop");
	var tablet = $("#tablet");
	var tabletP = $("#tablet-p");
	var mobile = $("#mobile");
	var events = $(".events");

	/* Arrays */
	var widths = ["100%", "1024px", "768px", "375px"];
	var heights = ["100%", "768px", "824px", "668px"];

	/* FADE-IN on PAGELOAD AND SET ACTIVE NAV COLOUR */
	iframe.fadeToggle(1000);
	desktop.css("background-color", "#333333");
	name.text(Cookies.get("name")); /* Taken from main site */

	desktop.click(function(){

		iframe.fadeToggle(1000);
		block();

    	if(container.hasClass("device")) {

    		/* Set Nav ACTIVE Colour and REVERT the others */
    		revert();
    		desktop.css("background-color", "#333333");

    		setTimeout(function() {

	    		container.removeClass("device").addClass("screen");
	    		container.css("height", heights[0]); /* bug with container.height(heights[0]) */
	    		container.css("width", widths[0]); /* bug with container.width(widths[0]) */
	    		container.css("box-shadow", "");
	    		container.css("webkit-box-shadow", "");
	    		iframe.css("border", "0px");
	    		iframe.delay(1500).fadeToggle(1000);

	    	}, 1000); /* Let fadetoggle finish before executing  */

    	}

    	setTimeout(enable, 3500);
	});

	tablet.click(function(){

    	iframe.fadeToggle(1000);
    	block();

    	if(container.hasClass("screen")) {

    		/* Set Nav ACTIVE Colour and REVERT the others */
    		revert();
    		tablet.css("background-color", "#333333");

    		setTimeout(function() {

	    		container.removeClass("screen").addClass("device");
	    		container.css("height", heights[1]); /* bug with container.height(heights[0]) */
	    		container.css("width", widths[1]); /* bug with container.width(widths[0]) */
	    		iframe.css("border", "1px solid #999999");
	    		shadow();
	    		iframe.delay(1500).fadeToggle(1000);

	    	}, 1000); /* Let fadetoggle finish before executing  */

    	} else {

    		/* Set Nav ACTIVE Colour and REVERT the others */
    		revert();
    		tablet.css("background-color", "#333333");

    		setTimeout(function() {

    			container.css("height", heights[1]); /* bug with container.height(heights[0]) */
	    		container.css("width", widths[1]); /* bug with container.width(widths[0]) */
	    		iframe.css("border", "1px solid #999999");
	    		shadow();
    			iframe.delay(1500).fadeToggle(1000);

    		}, 1000); /* Let fadetoggle finish before executing  */
    	} 

    	setTimeout(enable, 3500);
	});

	tabletP.click(function(){

    	iframe.fadeToggle(1000);
    	block();

    	if(container.hasClass("screen")) {

    		/* Set Nav ACTIVE Colour and REVERT the others */
    		revert();
    		tabletP.css("background-color", "#333333");

    		setTimeout(function() {

	    		container.removeClass("screen").addClass("device");

	    		container.css("height", heights[2]); /* bug with container.height(heights[0]) */
	    		container.css("width", widths[2]); /* bug with container.width(widths[0]) */
	    		iframe.css("border", "1px solid #999999");
	    		shadow();
	    		iframe.delay(1500).fadeToggle(1000);

	    	}, 1000); /* Let fadetoggle finish before executing  */
    		
    	} else {

    		/* Set Nav ACTIVE Colour and REVERT the others */
    		revert();
    		tabletP.css("background-color", "#333333");

    		setTimeout(function() {

	    		container.css("height", heights[2]); /* bug with container.height(heights[0]) */
	    		container.css("width", widths[2]); /* bug with container.width(widths[0]) */
	    		iframe.css("border", "1px solid #999999");
				shadow();   		
	    		iframe.delay(1500).fadeToggle(1000);

	    	}, 1000); /* Let fadetoggle finish before executing  */
    	} 

	    setTimeout(enable, 3500);
	});

	mobile.click(function(){

    	iframe.fadeToggle(1000);
    	block();

    	if(container.hasClass("screen")) {

    		/* Set Nav ACTIVE Colour and REVERT the others */
    		revert();
    		mobile.css("background-color", "#333333");

    		setTimeout(function() {

	    		container.removeClass("screen").addClass("device");
	    		container.css("height", heights[3]); /* bug with container.height(heights[0]) */
	    		container.css("width", widths[3]); /* bug with container.width(widths[0]) */
	    		iframe.css("border", "1px solid #999999");
	    		shadow();
	    		iframe.delay(1500).fadeToggle(1000);
	    	}, 1000); /* Let fadetoggle finish before executing  */

    	} else {

    		/* Set Nav ACTIVE Colour and REVERT the others */
    		revert();
    		mobile.css("background-color", "#333333");

    		setTimeout(function() {

	    		container.css("height", heights[3]); /* bug with container.height(heights[0]) */
	    		container.css("width", widths[3]); /* bug with container.width(widths[0]) */
	    		iframe.css("border", "1px solid #999999");
	    		shadow();
	    		iframe.delay(1500).fadeToggle(1000);

	    	}, 1000); /* Let fadetoggle finish before executing  */

    	} 

    	setTimeout(enable, 3500);
	});

	function revert() { /* Resets the Navigation Colours to default */

	    desktop.css("background-color", "transparent");
		tablet.css("background-color", "transparent");
		tabletP.css("background-color", "transparent");
		mobile.css("background-color", "transparent");

	}

	function shadow() { /* Add Shadow - Avoids Strange Chrome Bug */

		container.css("-webkit-box-shadow", "0 0 0 1px #999999");
	    container.css("box-shadow", "0 0 0 1px #999999");

	}

	function block() { /* Block User from executing anymore functions while in a loop */

			desktop.css("pointer-events", "none");
			tablet.css("pointer-events", "none");
			tabletP.css("pointer-events", "none");
			mobile.css("pointer-events", "none");
			events.css("cursor", "default");
	}

	function enable() { /* Enable all functions again */

			desktop.css("pointer-events", "auto");
			tablet.css("pointer-events", "auto");
			tabletP.css("pointer-events", "auto");
			mobile.css("pointer-events", "auto");
			events.css("cursor", "pointer");
	}
});