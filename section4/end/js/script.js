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
		createBahrain(createCavnas(200,125));
		createTime(createCavnas(200,125));
		createIsrael(createCavnas(200,125));
		createSomalia(createCavnas(200,125));
		createTurkey(createCavnas(200,125));
		createPacman(createCavnas(200,125));
		createQuadratic(createCavnas(200,125));
		createBezier(createCavnas(200,125));
		createHaiti(createCavnas(200,125));	
		createLinearGradient(createCavnas(200,125));	

		createRadialGradient(byId('myCanvas'));	
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


		function createTime(canvas){
			var w = canvas.width,
					h = canvas.height,
					context = canvas.getContext('2d'),
					x = w/2,
					y = h/2,
					r = h/3,
					date = new Date(),
					hour = date.getHours()%12,
					min = date.getMinutes(),
					sec = date.getSeconds(),
					dgr = Math.PI/180,
					cdgr = 0;

					context.beginPath();
					context.fillStyle = '#FFE11A';
					context.fillRect(0,0,w,h);

					context.fillStyle = '#B5E655';
					context.arc(x,y,r,0,2*Math.PI,false);
					context.fill();

					
					/*context.moveTo(x-r,y);
					context.lineTo(x+r,y);

					context.moveTo(x,y-r);
					context.lineTo(x,y+r);*/

					context.strokeStyle = '#96CA2D';
					context.lineWidth = 1;
					context.beginPath();
//seconds
					cdgr = dgr * (-90 + sec*6);
					context.moveTo(x,y);
					context.lineTo(x + Math.cos(cdgr)*r,y+ Math.sin(cdgr)*r);

					context.stroke();

//minutes
					context.lineWidth = 3;
					context.beginPath();

					cdgr = dgr * (-90 + min*6);
					context.moveTo(x,y);
					context.lineTo(x + Math.cos(cdgr)*r*.8,y+ Math.sin(cdgr)*r*.8);

					context.stroke();


					context.lineWidth = 5;
					context.beginPath();

					cdgr = dgr * (-90 + (hour + min/60)*30);
					context.moveTo(x,y);
					context.lineTo(x + Math.cos(cdgr)*r*.5,y+ Math.sin(cdgr)*r*.5);

					context.stroke();



					setTimeout(createTime,1000,canvas);

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

	function strokeTriangle(context, x1,y1,x2,y2, x3,y3, color){
		context.strokeStyle = color;

		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.lineTo(x3, y3);
		context.lineTo(x1, y1);
		context.closePath();

		context.stroke();	
	}

	function createIsrael(canvas){
			var w = canvas.width,
					h = canvas.height,
					context = canvas.getContext('2d'),
					x = w/2,
					y = h/2,
					r = h/4.7,
					pi = Math.PI,
					dgr = pi/180,
					lw = r/1.4;

			context.fillStyle = '#ffffff';
			context.fillRect(0,0,w,h);


			context.lineWidth = r/5.5;
			strokeTriangle(context, 
				x + Math.sin(0) * r, y+ Math.cos(0) * r,
				x + Math.sin(dgr*120) * r, y+ Math.cos(dgr*120) * r,
				x + Math.sin(dgr*240) * r, y+ Math.cos(dgr*240) * r,
				"#0040C0"
				);

			strokeTriangle(context, 
				x + Math.sin(pi) * r, y+ Math.cos(pi) * r,
				x + Math.sin(pi + dgr*120) * r, y+ Math.cos(pi + dgr*120) * r,
				x + Math.sin(pi + dgr*240) * r, y+ Math.cos(pi+ dgr*240) * r,
				"#0040C0"
				);

			context.lineWidth = lw;
			context.beginPath();
			context.moveTo(0,lw);
			context.lineTo(w,lw);

			context.moveTo(0,h-lw);
			context.lineTo(w,h-lw);

			context.stroke();
	}

	function createStar(context, x, y, ir, or, points,fillColor,strokeColor,tilt){

		var dgr = Math.PI/180,
				step = dgr* (360/points)/2,
				current = 0,
				radianTilt = dgr*tilt;

		context.beginPath();

		for(var i=0; i<points; i++){
			current += step;
			context.lineTo(
				x + Math.sin(current + radianTilt)*or,
				y + Math.cos(current + radianTilt)*or);

			current += step;
			context.lineTo(
				x + Math.sin(current + radianTilt)*ir,
				y + Math.cos(current + radianTilt)*ir);

		}

		context.closePath();

		if(fillColor){
			context.fillStyle = fillColor;
			context.fill();
		}

		if(strokeColor){
			context.storkeStyle = strokeColor;
			context.storke();
		}

	}

	function createSomalia(canvas){
			var w = canvas.width,
					h = canvas.height,
					context = canvas.getContext('2d');

			context.fillStyle = '#4189DD';
			context.fillRect(0,0,w,h);

			createStar(context,w/2, h/2, h/13, h/5, 5, "#ffffff", null,0);
   
	}

	function createTurkey(canvas){
		var w = canvas.width,
				h = canvas.height,
				context = canvas.getContext('2d'),
				x = w/2,
				y = h/2,
				r = h/4;

		context.fillStyle = "#E30A17";
    context.fillRect(0,0,w,h);

    context.fillStyle = '#ffffff';
    context.beginPath();
    context.arc(x-r, y, r, 0, 2*Math.PI, false);
    context.closePath();
    context.fill();

    r = Math.floor(r*.75);
    context.fillStyle = '#E30A17';
    context.beginPath();
    context.arc(x-r*.9, y, r, 0, 2*Math.PI, false);
    context.closePath();
    context.fill();

    r = Math.floor(r*.75);
    createStar(context, x+r,y,r/2.2, r, 5,'#ffffff',null,15)



	}

	function createPacman(canvas){
		var w = canvas.width,
				h = canvas.height,
				context = canvas.getContext('2d'),
				x = w/2,
				y = h/2,
				r = h/4,
				radian = Math.PI/180;

			context.fillStyle = "#000000";
      context.fillRect(0,0,w,h);

      context.beginPath();
      context.fillStyle = '#F3F100';
      context.moveTo(x,y);
      context.arc(x,y,r,40*radian, 320*radian,false);
      context.lineTo(x,y);
      context.closePath();
      context.fill();


      context.beginPath();
      context.fillStyle = '#F3F100';
      context.moveTo(x + 20,y);
      context.arc(x + 20,y,r,40*radian, 320*radian,true);
      context.lineTo(x + 20,y);
      context.closePath();
      context.fill();

	}
	

	function createQuadratic(canvas){
		var w = canvas.width,
				h = canvas.height,
				context = canvas.getContext('2d'),
				x = w/2,
				y = h/2;

				context.fillStyle = "#383388";
        context.fillRect(0,0,w,h);

        context.lineWidth = 5;
        context.strokeStyle = "#383388";
        context.fillStyle = "#ffffff";

        context.beginPath();
        context.moveTo(0,y);
        context.quadraticCurveTo(x,0,w,y);
        context.quadraticCurveTo(x,h,0,y);
        context.closePath();

        context.fill();

        context.beginPath();
        context.arc(x,y,x/5,0,2*Math.PI,false);
        context.closePath();
        context.stroke();

	}

	function createBezier(canvas){
		var w = canvas.width,
				h = canvas.height,
				context = canvas.getContext('2d'),
				x = w/2,
				y = h/2;

				context.fillStyle = "#838833";
        context.fillRect(0,0,w,h);

        context.lineWidth = 5;
        context.strokeStyle = "#838833";
        context.fillStyle = "#ffffff";

        context.beginPath();
        context.moveTo(0,y);
        context.bezierCurveTo(0,0,w,0,w,y);
        context.bezierCurveTo(w,h,0,h,0,y);
        context.closePath();

        context.fill();

        context.beginPath();
        context.arc(x,y,x/5,0,2*Math.PI,false);
        context.closePath();
        context.stroke();

	}

	function createHaiti(canvas){
		var w = canvas.width,
				h = canvas.height,
				context = canvas.getContext('2d'),
				x = w/2,
				y = h/2;


		context.fillStyle = '#00209F';
		context.fillRect(0,0,w,y);

		context.fillStyle = '#D21034';
		context.fillRect(0,y,w,y);

		var img = new Image();
		img.onload = function(){
			var ratio = this.height / (h/4),
					iw = this.width/ratio,
					ih = this.height/ratio;

			context.drawImage(this,x-iw/2,y-ih/2,iw,ih);

		};

		img.src = 'img/haiti.png';
		
	}

	function transformPosition(canvas, x, y){
		var rect = canvas.getBoundingClientRect();
		return {x: Math.round(x-rect.left),
							y: Math.round(y-rect.top)};
	}
	

	function createLinearGradient(canvas){
		var w = canvas.width,
				h = canvas.height,
				context = canvas.getContext('2d'),
				point1,
				point2;

		canvas.addEventListener('mousedown',function(e){
			point1=transformPosition(canvas,e.clientX,e.clientY);
		});

		canvas.addEventListener('mouseup',function(e){
			point2=transformPosition(canvas,e.clientX,e.clientY);

			var grd = context.createLinearGradient(point1.x,point1.y,point2.x,point2.y);
					grd.addColorStop(0,'#333933');
					//grd.addColorStop(.5,'#ff0000');
					grd.addColorStop(1,'#339333');

			context.fillStyle = grd;
			context.fillRect(0,0,w,h);
		});
	}

function createRadialGradient(canvas){
		var w = canvas.width,
				h = canvas.height,
				context = canvas.getContext('2d'),
				point1,
				point2;

		canvas.addEventListener('mousedown',function(e){
			point1=transformPosition(canvas,e.clientX,e.clientY);

		});

		canvas.addEventListener('mouseup',function(e){
			point2=transformPosition(canvas,e.clientX,e.clientY);
			var grd = context.createRadialGradient(point1.x,point1.y,Math.abs((point1.x-point2.x)/2), point2.x,point2.y,w);
					grd.addColorStop(0,'#333933');
					grd.addColorStop(.5,'#ffff00');
					grd.addColorStop(1,'#339333');

			context.fillStyle = grd;
			context.fillRect(0,0,w,h);
		});

		

		


	}

	

	



})();


