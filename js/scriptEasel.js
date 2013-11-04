/**
 * @author Todd Shelton
 */
$('document').ready(function() {
	
	var appHeight = 400, appWidth = 1000, appCenterX = appWidth / 2, appCenterY = appHeight / 2, stage = new createjs.Stage("container"), 
		fitcLogo = new Image(), image, 
		tl;
		
		fitcLogo.src = "assets/images/rCar2.png";
		
		var shape = new createjs.Shape(new createjs.Graphics().beginBitmapFill(fitcLogo).drawRect(0, 0, fitcLogo.width, fitcLogo.height));
		shape.scaleX = shape.scaleY = 2;
		stage.addChild(fitcLogo);
		
		//stage.addChild(image);	
		stage.update();
	// function getAnimation() {
		// var logo = new createjs.Bitmap("assets/images/car60.png");
		// logo.width = 60;
		// logo.height = 60;
		// logo.x = -80;
		// logo.y = 131;
		// // var logo = new Kinetic.Image({
			// // image : fitcLogo,
			// // width : 60,
			// // height : 60,
			// // x : -80,
			// // y : 131
		// // });
// 
		// var bezTween = new TweenMax(logo, 6, {
			// bezier : {
				// type : "thru",
				// values : [{
					// setX : -60,
					// setY : 105
				// }, {
					// setX : 159,
					// setY : 85
				// },{
					// setX : 423,
					// setY : 220
				// }, {
					// setX : 701,
					// setY : 180
				// },  {
					// setX : 930,
					// setY : 120
				// }, {
					// setX : 1080,
					// setY : 170
				// }],
				// //autoRotate needs to know how to adjust x/y/rotation so we pass in the names of the apporpriate KineticJS methods
				// autoRotate : ["setX", "setY", "setRotationDeg"]
			// },
			// ease : Linear.easeNone,
			// autoCSS : false
		// });
// 
		// stage.addChild(logo);
// 
		// return bezTween;
// 
	// }
	
	function buildTimeline() {
	  tl = new TimelineMax({repeat:4, onUpdate:updateSlider, delay:1});
	  tl.add(getAnimation(),  .2);
	  tl.add(getAnimation(),  1);
	  // for (i = 0 ; i< 6; i++){
	    // //start creature animation every 0.12 seconds
	  // tl.add(getAnimation(), i * 1);
	  // }
	}
	
	function redraw(){
		stage.update();
	};
	
	$("#slider").slider({
	  range: false,
	  min: 0,
	  max: 100,
	  step:.1,
	  slide: function ( event, ui ) {
	    tl.pause();
	    //adjust the timeline's progress() based on slider value
	    tl.progress( ui.value/100 );
	    }
	});
	
	// $("#pBtn").button();
// 	
	// function updateSlider() {
	  // $("#slider").slider("value", tl.progress() *100);
	// } 		
// 	
// 	
	// $("#slider, .ui-slider-handle").mousedown(function() {
	  // $('html, #slider, .ui-slider-handle').one("mouseup", function(e){
	    // tl.resume();
	  // });
	// });
// 	
	TweenLite.ticker.addEventListener("tick", redraw);
	//buildTimeline();

});
