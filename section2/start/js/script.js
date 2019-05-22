(function(){
	function byId(id){
		return document.getElementById(id);
	}

	document.addEventListener ? 
			document.addEventListener('DOMContentLoaded',onDOMContentLoaded):
			window.onload = doCanvasNotSupported;


	function onDOMContentLoaded(){
		byId('myCanvas').getContext ?
			doCanvas() : doCanvasNotSupported();
	}

	function doCanvas(){
		console.log("We are ready to Canvas.");
		createPalau(createCavnas(200,125));
		
	}

	function doCanvasNotSupported(){
		byId('canvasWrapper').innerHTML = "<img src='img/js-sorry.jpg' />";
	}

	function createCavnas(w,h){
		var canvas = document.createElement('canvas');
				canvas.width = w;
				canvas.height = h;

		byId('canvasWrapper').appendChild(canvas);

		return canvas;
	}

	function createPalau(canvas){
		var w = canvas.width,
				h = canvas.height,
				context = canvas.getContext('2d');

				context.fillStyle = '#4AADD6';
				context.fillRect(0,0,w,h);

				context.fillStyle = '#FFDE00';
				context.arc(w/2.4,h/2,h/3,0,2*Math.PI,false);
				context.fill();

	}



})();


