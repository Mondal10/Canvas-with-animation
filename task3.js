function Canvas(obj){
	var xPos, yPos;
	var canvas = document.createElement('CANVAS');

	var toStop;


	// this.create = function(obj){
		xPos = obj.xPos;
		yPos = obj.yPos;
		id = obj.id;
  	
		var x=0;
		var y=0;
		var xorg=0;
		var yorg=0;

		var sqr = 50;
		// var count = 1;

		const start = {
			x:canvas.width/2 ,
			y:canvas.height/2 ,
			width:100,
			heigth:50
		};

		const pause = {
			x:canvas.width/2 + 110,
			y:canvas.height/2 ,
			width:100,
			heigth:50
		};




		canvas.style.position = 'absolute';
		canvas.style.left = xPos + 'px';
		canvas.style.top = yPos + 'px';
		canvas.setAttribute("width",600);
		canvas.setAttribute("height",400);
		var xWidth = canvas.width;
		var yHeight = canvas.height;


		canvas.style.border = "2px solid black"
		canvas.setAttribute("id","canv"+id);

		document.body.appendChild(canvas);
		// console.log(canvas.id);

		var c = document.getElementById("canv"+id)
		var ctx = c.getContext("2d");

		function draw(){
			
			ctx.beginPath();
			ctx.rect(x,y,sqr,sqr);
			ctx.lineWidth="4";
			ctx.strokeStyle = "green";
			ctx.stroke();
			ctx.closePath();

			ctx.beginPath();
			ctx.rect(start.x, start.y,100 ,50 ); 
			ctx.fillStyle = '#FFFFFF'; 
			ctx.fillStyle = 'green';
			ctx.fill(); 
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#000000'; 
			ctx.stroke();
			ctx.closePath();
			// ctx.font = '24pt serif';
			// ctx.fillStyle = '#000000';
			// ctx.fillText('Start', canvas.width/2 - 180, canvas.height/2 - 60);
			ctx.closePath();

			ctx.beginPath();
			ctx.rect(pause.x , pause.y,100 , 50); 
			ctx.fillStyle = '#FFFFFF'; 
			ctx.fillStyle = 'red';
			ctx.fill(); 
			ctx.lineWidth = 2;
			ctx.strokeStyle = '#000000'; 
			ctx.stroke();
			ctx.closePath();
			// ctx.font = '24pt serif';
			// ctx.fillStyle = '#000000';
			// ctx.fillText('Pause', canvas.width/2 +120, canvas.height/2 -60);
			ctx.closePath;

		}

		function getMousePos(canvas, event) {
			var start = canvas.getBoundingClientRect();
			return {
				x: event.clientX - start.left,
				y: event.clientY - start.top
			};

		}

		function isInsideStart(pos, start){
			return (pos.x > start.x && pos.x < start.x+start.width && pos.y < start.y+start.heigth && pos.y > start.y)
		}

		function isInsidePause(pos, pause){
			return (pos.x > pause.x && pos.x < pause.x+pause.width && pos.y < pause.y+pause.heigth && pos.y > pause.y)
		}


		
		canvas.addEventListener('mousedown', startDown,false);
		function startDown(evt) {
			var mousePos = getMousePos(canvas, evt);
			if (isInsideStart(mousePos,start)) {
				// alert('clicked inside rect');
				// setInterval(move,0);
				toStop= setInterval(move,0);
				console.log("started");
				canvas.removeEventListener('mousedown', startDown,false);
    		}
    		// else{
      //   		// alert('clicked outside rect');
      //   		console.log("clicked outside");
    		// 	}	
			} 


		canvas.addEventListener('mousedown', function(evt) {
			var mousePos = getMousePos(canvas, evt);
			if (isInsidePause(mousePos,pause)) {
				// alert('clicked inside rect');
				clearInterval(toStop);
				console.log("paused");
				canvas.addEventListener('mousedown', startDown,false);
    		}
    		// else{
      //   		// alert('clicked outside rect');
      //   		console.log("clicked outside");
    		// 	}	
			}, false);



		canvas.addEventListener('mousemove', function(evt) {
			var mousePos = getMousePos(canvas, evt);
			if (isInsideStart(mousePos,start)) {
				// alert('clicked inside rect');
				ctx.beginPath();
				ctx.fillStyle ='grey';
				ctx.rect(start.x, start.y,100 , 50); 
				
				ctx.fill();
				ctx.closePath();
				// console.log("movestart");
    		}
    		else{
        	// alert('clicked outside rect');
        		ctx.beginPath();
				ctx.rect(start.x, start.y,100 ,50 ); 
				// ctx.fillStyle = '#FFFFFF'; 
				ctx.fillStyle = 'green';
				ctx.fill(); 
			}
    	});
    

     canvas.addEventListener('mousemove', function(evt) 
     {var mousePos = getMousePos(canvas, evt);
    	// 		}	
    		if (isInsidePause(mousePos,pause)) {
				// alert('clicked inside rect');
				ctx.beginPath();
				ctx.fillStyle = 'grey';
				ctx.rect(pause.x , pause.y,100 , 50); 
				
				ctx.fill();
				ctx.closePath();
				// console.log("movepause");
    	
    		}
    		else{
        	// alert('clicked outside rect');
        		ctx.beginPath();
				ctx.rect(pause.x, pause.y,100 ,50 ); 
				// ctx.fillStyle = '#FFFFFF'; 
				ctx.fillStyle = 'red';
				ctx.fill();
        	// console.log("poutside");
    		}
    	});
    


		function move(){
			canvas.width = canvas.width;
			// ctx.clearRect(0,0,xWidth,yHeight);
			draw();
			
			
			
			if( y==yorg && x+sqr < xWidth){
				x++;
				
			}

			else if(x+sqr == xWidth && y+sqr < yHeight  ){
				y++;
				
			}

			else if(y+sqr == yHeight && x>xorg ){
				x--;
			}

			else if(x == xorg && y >= yorg ){
				y--;
				if(y== yorg+sqr){
					xorg += sqr;
					yorg += sqr;
					xWidth -= sqr;
					yHeight -= sqr;
				}
				
			}
             // console.log(x,y)
			
			

		}		
		// console.log(xorg,yorg,xWidth,yHeight);
		// console.log(dx,dy);
		move();
}	

// }

window.onload = function(){
	var obj1 = new Canvas({
		xPos:10,
		yPos:10,
		id:1
	});
	

	var obj2 = new Canvas({
		xPos:10,
		yPos:420,
		id:2
	});
	
}