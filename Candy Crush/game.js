var requestAnimationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!

var myX=10, myY=10,mishkaX=0,mishkaY=0, duljina=10;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
var pole=[], posoka=0, points=0;
for(var x=0;x<25;x++){
    pole[x]=[];
    for(var y=1;y<25;y++){
        pole[x][y]=Math.floor(Math.random()*4);
                
    }
}
window.addEventListener("keyup", function (args) {      //vika se pri puskane na kopche natiskano do sega

}, false);


 
window.addEventListener("mouseup", function (args) {
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;//Slagame tezi redove za da razberem kude e deistvieto s mishkata
   myX=Math.floor(mishkaX/25)
   myY=Math.floor(mishkaY/25)
   if(pole[myX][myY]==pole[myX+1][myY] && pole[myX][myY]==pole[myX+2][myY]){
   pole[myX][myY]=Math.floor(Math.random()*4);
   pole[myX+2][myY]=Math.floor(Math.random()*4);
   pole[myX+1][myY]=Math.floor(Math.random()*4);
   points=points+300;
   }
  
}, false);


function update() {     //specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
points=points-1;
console.log(points);
    setTimeout(update, 10); //kolko chesto da se dviji
}

function draw() {       //specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.clearRect(0, 0, canvas.width, canvas.height);       //NEBAR!
    context.globalAlpha = 1;
    for(var x=0;x<25;x++){
        for(var y=0;y<25;y++){
            if(pole[x][y]==0){
                context.fillStyle = "#00FF00";//izbor na cvqt
                context.fillRect(x*25, y*25, 23, 23); //risuvane na zapulnen kvadrat s izb
            }
            if(pole[x][y]==1){
                context.fillStyle = "#FF0000";//izbor na cvqt
                context.fillRect(x*25, y*25, 23, 23); //risuvane na zapulnen kvadrat s izb
            }
            if(pole[x][y]==2){
                context.fillStyle = "#999999";//izbor na cvqt
                context.fillRect(x*25, y*25, 23, 23); //risuvane na zapulnen kvadrat s izb
            }
            if(pole[x][y]==3){
                context.fillStyle = "#0090FF";//izbor na cvqt
                context.fillRect(x*25, y*25, 23, 23); //risuvane na zapulnen kvadrat s izb
            }
            if(pole[x][y]==4){
                context.fillStyle = "#2200AF";//izbor na cvqt
                context.fillRect(x*25, y*25, 23, 23); //risuvane na zapulnen kvadrat s izb
            }
 
        }
    }//NEBARAI Tezi redove- s tqh zapochva draw-a!
    context.fillStyle = "#FF0000";//izbor na cvqt//risuvane na zapulnen kvadrat s izbrania cvqt
    //purvite 2 argumenta sa koordinati za goren lqv ugul, a sled tva- razmerite po x i y!
    
    requestAnimationFrame(draw);        //NEBARAI TOZI RED- Trqbva da e posleden ;)
}
update();       //purvo vikane. ne go zatrivai!
draw(); //purvo vikane. ne go zatrivai!