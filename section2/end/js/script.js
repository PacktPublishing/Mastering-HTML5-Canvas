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
		createGreece(createCavnas(200,125));
		createGuyana(createCavnas(200,125));

		createBahrain(byId('myCanvas'));
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

	function createGreece(canvas){
		var w = canvas.width,
				h = canvas.height,
				context = canvas.getContext('2d'),
				lineHeight = h/9,
				offset = lineHeight/2;

				context.fillStyle = '#000080';
				context.fillRect(0,0,w,h);

				context.strokeStyle = '#ffffff';
				context.lineWidth = lineHeight;

				for(var i=1; i<8; i+=2){
					context.moveTo(0,i*lineHeight+offset);
					context.lineTo(w,i*lineHeight+offset);
				}

				context.stroke();
				context.beginPath();

				var rw = lineHeight*5;
				context.fillRect(0,0,rw,rw);

				context.moveTo(0,rw/2);
				context.lineTo(rw,rw/2);

				context.moveTo(rw/2,0);
				context.lineTo(rw/2,rw);
				context.stroke();

	}

	function createGuyana(canvas){
		var w = canvas.width,
				h = canvas.height,
				context = canvas.getContext('2d'),
				gap = (w/10) /2.5;

				context.fillStyle = '#009E49';
				context.fillRect(0,0,w,h);

				fillTriangle(context, 0,0,w,h/2, 0,h, '#ffffff');
				fillTriangle(context, 0,gap,w-gap*2.5,h/2, 0,h-gap, 
																							'#FCD116');
				fillTriangle(context, 0,0,w/2,h/2, 0,h, 
																							'#000000');
				fillTriangle(context, 0,gap,w/2-(gap*1.5),h/2, 0,h-gap, 
																							'#CE1126');
		
	}

	function createBahrain(canvas){
		var w = canvas.width,
				h = canvas.height,
				context = canvas.getContext('2d'),
				x = w/4,
				xw = x/2,
				yh = h/5;

				context.fillStyle = '#CE1126';
				context.fillRect(0,0,w,h);

				context.fillStyle = '#ffffff';
				context.beginPath();
				context.lineTo(x,0);

				
				for(var i=0; i<5; i++){
					context.lineTo(x+xw, (i+.5)*yh);
					context.lineTo(x, (i+1)*yh);
				}

				context.lineTo(0,h);
				context.lineTo(0,0);

				context.fill();



	}


	function fillTriangle(context, x1,y1,x2,y2, x3,y3, color){
		context.fillStyle = color;

		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.lineTo(x3, y3);
		context.lineTo(x1, y1);
		context.closePath();

		context.fill();	
	}



})();


