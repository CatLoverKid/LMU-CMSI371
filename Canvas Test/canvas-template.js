/*
 * This template file is meant to be a template for canvas-based
 * web page code.  Nothing here is set in stone; it is mainly
 * intended to save you some typing.
 */
// Yes, we can use jQuery here, but avoid it just in case you
// really don't want to use it.  We do still keep things away
// from the global namespace.
(() => {
    // Ditto on using jQuery here.
    let canvas = document.getElementById("canvas");
    let renderingContext = canvas.getContext("2d");

	renderingContext.beginPath();
		renderingContext.moveTo(243, 47);
		renderingContext.bezierCurveTo(207, 35, 190, 42,191, 42);
		renderingContext.bezierCurveTo(170, 47, 154, 80,154, 80);	
		renderingContext.bezierCurveTo(142, 122, 153, 151,152, 150);
		renderingContext.bezierCurveTo(166, 195, 194, 220,194, 220);
		renderingContext.bezierCurveTo(209, 230, 216, 228, 216, 228);
		renderingContext.bezierCurveTo(225, 228, 241, 220,241, 220);
		renderingContext.bezierCurveTo(255, 216, 270, 221,270, 221);
		renderingContext.bezierCurveTo(290, 232, 308, 225,308, 225);
		renderingContext.bezierCurveTo(327, 220, 354, 160,355, 160);
		renderingContext.bezierCurveTo(323, 150, 320, 115,320, 115);
		renderingContext.bezierCurveTo(318, 90, 347, 64,347, 64);
		renderingContext.bezierCurveTo(325, 40, 310, 39,310, 39);
		renderingContext.bezierCurveTo(290, 35, 260, 47,260, 47);
		renderingContext.bezierCurveTo(251, 49, 243, 47,243, 47);
		renderingContext.closePath();
		renderingContext.lineWidth = 1;
		//renderingContext.fillStyle = 'black';
		//renderingContext.fill();
		renderingContext.strokeStyle = 'black';
		renderingContext.stroke();
	
})();