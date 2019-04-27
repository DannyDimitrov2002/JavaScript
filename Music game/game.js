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

var myX=395, myY=500,my2X=595,my2Y=500, my3X=195, my3Y=500, mishkaX=0,mishkaY=0;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
var muzikaX=[], muzikaY=[], muzika2X=[], muzika2Y=[], muzika3X=[], muzika3Y=[];
var linia1X=410, linia1Y=0, linia2X=610, linia2Y=0, linia3X=210, linia3Y=0;

muzikaX[0]=400; muzikaY[0]=0;
muzikaX[1]=400; muzikaY[1]=-80;
muzikaX[2]=400; muzikaY[2]=-160;

muzika2X[0]=600; muzika2Y[0]=0;
muzika2X[1]=600; muzika2Y[1]=-80;
muzika2X[2]=600; muzika2Y[2]=-160;

muzika3X[0]=200; muzika3Y[0]=0;
muzika3X[1]=200; muzika3Y[1]=-80;
muzika3X[2]=200; muzika3Y[2]=-160;
window.addEventListener("keyup", function (args) {      //vika se pri puskane na kopche natiskano do sega

if(args.which==37){    
if(myX<muzikaX[0]+30 && muzikaX[0]<myX+40 &&
      myY<muzikaY[0]+30 && muzikaY[0]<myY+10){
      console.log("igracha se bluska");
    muzikaY[0]=0;
}
}

    if(args.which==37){    
if(myX<muzikaX[1]+30 && muzikaX[1]<myX+40 &&
      myY<muzikaY[1]+30 && muzikaY[1]<myY+10){
      console.log("igracha se bluska");
muzikaY[1]=0;
}
}
    
    if(args.which==37){    
if(myX<muzikaX[2]+30 && muzikaX[2]<myX+40 &&
      myY<muzikaY[2]+30 && muzikaY[2]<myY+10){
      console.log("igracha se bluska");
muzikaY[2]=0;
}
}
    
 
    
    
    if(args.which==40){    
if(myX<muzika2X[0]+30 && muzika2X[0]<my2X+40 &&
      myY<muzika2Y[0]+30 && muzika2Y[0]<my2Y+10){
      console.log("igracha se bluska");
muzika2Y[0]=0;
}
}

    if(args.which==40){    
if(myX<muzika2X[1]+30 && muzika2X[1]<my2X+40 &&
      myY<muzika2Y[1]+30 && muzika2Y[1]<my2Y+10){
      console.log("igracha se bluska");
muzika2Y[1]=0;
}
}
    
    if(args.which==40){    
if(myX<muzika2X[2]+30 && muzika2X[2]<my2X+40 &&
      myY<muzika2Y[2]+30 && muzika2Y[2]<my2Y+10){
      console.log("igracha se bluska");
muzika2Y[2]=0;
}
}
    
 
    
    
    
      if(args.which==39){    
if(myX<muzika3X[0]+30 && muzika3X[0]<my3X+40 &&
      myY<muzika3Y[0]+30 && muzika3Y[0]<my3Y+10){
      console.log("igracha se bluska");
muzika3Y[0]=0;
}
}

    if(args.which==39){    
if(myX<muzika3X[1]+30 && muzika3X[1]<my3X+40 &&
      myY<muzika3Y[1]+30 && muzika3Y[1]<my3Y+10){
      console.log("igracha se bluska");
muzika3Y[1]=0;
}
}
    
    if(args.which==39){    
if(myX<muzika3X[2]+30 && muzika3X[2]<my3X+40 &&
      myY<muzika3Y[2]+30 && muzika3Y[2]<my3Y+10){
      console.log("igracha se bluska");
muzika3Y[2]=0;
}
}
    
    

    
}, false);

window.addEventListener("mousemove", function (args) {
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;//Slagame tezi redove za da razberem kude e deistvieto s mishkata
   
}, false);


function update() {     //specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
   muzikaY[0]=muzikaY[0]+2;
   muzikaY[1]=muzikaY[1]+2;
   muzikaY[2]=muzikaY[2]+2; 
    
   muzika2Y[0]=muzika2Y[0]+2;
   muzika2Y[1]=muzika2Y[1]+2;
   muzika2Y[2]=muzika2Y[2]+2;
    
   muzika3Y[0]=muzika3Y[0]+2;
   muzika3Y[1]=muzika3Y[1]+2;
   muzika3Y[2]=muzika3Y[2]+2;
    setTimeout(update, 10); //kolko chesto da se dviji
}

function draw() {       //specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.clearRect(0, 0, canvas.width, canvas.height);       //NEBAR!
    context.globalAlpha = 1;                                    //NEBARAI Tezi redove- s tqh zapochva draw-a!

    context.fillStyle = "#000000";
    context.fillRect(linia1X,linia1Y,5,600)
    context.fillRect(linia2X,linia2Y,5,600)
    context.fillRect(linia3X,linia3Y,5,600)
    
    context.fillStyle = "#FF0000";//izbor na cvqt
    context.fillRect(myX,myY,40,10);
    context.fillRect(my2X,my2Y,40,10);
    context.fillRect(my3X,my3Y,40,10);
    
    context.fillRect(muzikaX[0],muzikaY[0], 30, 30);
    context.fillRect(muzikaX[1],muzikaY[1], 30, 30);
    context.fillRect(muzikaX[2],muzikaY[2], 30, 30);
    
    context.fillRect(muzika2X[0],muzika2Y[0], 30, 30);
    context.fillRect(muzika2X[1],muzika2Y[1], 30, 30);
    context.fillRect(muzika2X[2],muzika2Y[2], 30, 30);
    
    context.fillRect(muzika3X[0],muzika3Y[0], 30, 30);
    context.fillRect(muzika3X[1],muzika3Y[1], 30, 30);
    context.fillRect(muzika3X[2],muzika3Y[2], 30, 30);
    

    //risuvane na zapulnen kvadrat s izbrania cvqt
    //purvite 2 argumenta sa koordinati za goren lqv ugul, a sled tva- razmerite po x i y!
    
    requestAnimationFrame(draw);        //NEBARAI TOZI RED- Trqbva da e posleden ;)
}
update();       //purvo vikane. ne go zatrivai!
draw(); //purvo vikane. ne go zatrivai!